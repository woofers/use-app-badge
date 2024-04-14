type BadgeOptions = {
  content: number | string | boolean
  badgeColor: string
  textColor: string
  badgeSize: number
}

type BadgeProps = Partial<BadgeOptions> & { src: string }

const getProps = ({
  src,
  content = false,
  badgeColor = '#eb372c',
  textColor = '#ffffff',
  badgeSize = 18
}: BadgeProps) =>
  ({
    src,
    content: content,
    badgeColor,
    textColor,
    badgeSize
  }) as const

const shouldDrawBadgeForContent = (content: number | string | boolean) => typeof content === 'number' ? content > 0 : !!content

const shouldDrawTextForContent = (content: number | string | boolean) => typeof content === 'number' ? content > 0 : !!content

const drawBadgeSize = 32

const createCanvas = () => {
  const canvas = document.createElement('canvas')
  canvas.width = drawBadgeSize
  canvas.height = drawBadgeSize
  return canvas
}

const getCanvas = (() => {
  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D
  return () => {
    if (!canvas) {
      canvas = createCanvas()
    }
    if (!context) {
      context = canvas.getContext('2d')
    }
    context.clearRect(0, 0, drawBadgeSize, drawBadgeSize)
    return [canvas, context] as const
  }
})()

const getImage = (() => {
  let cache = {} as Record<string, HTMLImageElement>
  return (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
    if (!(src in cache)) {
      const image = document.createElement('img')
      image.width = drawBadgeSize
      image.height = drawBadgeSize
      image.src = src
      cache[src] = image
      image.onload = () => resolve(cache[src])
      image.onerror = () => reject()
      image.onabort = () => reject()
    } else {
      resolve(cache[src])
    }
  })
})()

const padding = 2
const drawBadgeCircle = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  color: string,
  size: number
) => {
  const radius = size * 0.5
  context.beginPath()
  context.arc(
    canvas.width - radius - padding,
    radius + padding,
    radius,
    0,
    2 * Math.PI
  )
  context.fillStyle = color
  context.fill()
}

export const generateIconFor = async (props: BadgeProps) => {
  const {
    src,
    content: badge,
    textColor,
    badgeColor,
    badgeSize
  } = getProps(props)
  const [canvas, context] = getCanvas()
  const image = await getImage(src)
  context.drawImage(image, 0, 0, drawBadgeSize, drawBadgeSize)
  if (shouldDrawBadgeForContent(badge)) {
    drawBadgeCircle(canvas, context, badgeColor, badgeSize)
    if (shouldDrawTextForContent(badge)) {
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillStyle = textColor
      const content = `${badge}`.slice(0, 2)
      const doubleDigit = content.length > 1
      context.font = `${doubleDigit ? 14 : 18}px sans-serif`
      context.fillText(
        content,
        canvas.width - badgeSize / 2 - padding,
        badgeSize / 2 + padding + 1
      )
    }
  }
  return canvas.toDataURL('image/png')
}
