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
  badgeSize = 10
}: BadgeProps) =>
  ({
    src,
    content: content,
    badgeColor,
    textColor,
    badgeSize
  }) as const

const shouldDrawBadgeForContent = (content: any) => {
  if (content == '') return true
  if ((content as any) == false || content == 'false') return false
  return true
}

const shouldDrawTextForContent = (content: any) => {
  return (content as any) != false && content !== 'true'
}

const drawBadgeSize = 16

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
  return (src: string) => {
    if (!(src in cache)) {
      const image = document.createElement('img')
      image.src = src
      cache[src] = image
    }
    return cache[src]
  }
})()

const drawBadgeCircle = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  color: string,
  size: number
) => {
  const radius = size * 0.5
  context.beginPath()
  context.arc(
    canvas.width - radius,
    canvas.height - radius,
    radius,
    0,
    2 * Math.PI
  )
  context.fillStyle = color
  context.fill()
}

export const generateIconFor = (props: BadgeProps) => {
  const {
    src,
    content: badge,
    textColor,
    badgeColor,
    badgeSize
  } = getProps(props)
  const [canvas, context] = getCanvas()
  const image = getImage(src)
  context.drawImage(image, 0, 0, drawBadgeSize, drawBadgeSize)
  if (shouldDrawBadgeForContent(badge)) {
    drawBadgeCircle(canvas, context, badgeColor, badgeSize)
    if (shouldDrawTextForContent(badge)) {
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillStyle = textColor
      context.fillText(
        `${badge}`.slice(0, 2),
        canvas.width - badgeSize / 2,
        canvas.height - badgeSize / 2
      )
    }
  }
  return canvas.toDataURL('image/png')
}
