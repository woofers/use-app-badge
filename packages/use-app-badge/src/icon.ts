
type BadgeOptions = {
  content: number | string | boolean
  badgeColor: string
  textColor: string
  badgeSize: number
}

type BadgeProps = Partial<BadgeOptions> & { src: string }

export type FavIcon = Omit<BadgeProps, 'content'> & { updateMeta?: boolean }

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

const drawBadgeSize = 32
const padding = 2
const max = 99

const createCanvas = () => {
  const canvas = document.createElement('canvas')
  canvas.width = drawBadgeSize
  canvas.height = drawBadgeSize
  return canvas
}

const makePool = <T,>(create: () => T) => {
  let pool = [] as T[]
  let available = [] as number[]
  const get = () => {
    if (available.length > 0) {
      const lastAvailable = available.pop()
      return [
        pool[lastAvailable],
        () => { available.push(lastAvailable) },
      ] as const
    }
    const element = create()
    pool.push(element)
    const at = pool.length - 1
    return [
      element,
      () => { available.push(at) }
    ] as const
  }
  return get
}

const getCanvasFromPool = makePool(() => {
  const canvas = createCanvas()
  const context = canvas.getContext('2d')
  return [canvas, context] as const
})

const getImage = (() => {
  const cache = {} as Record<string, HTMLImageElement>
  return (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
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

const getContent = (content: string | number | boolean) =>
  typeof content === 'boolean' && content
    ? ''
    : typeof content === 'number'
      ? content > max
        ? `${content}+`
        : `${content}`
      : `${content}`.slice(0, 2)

const shouldDrawContent = (content: number | string | boolean) =>
  typeof content === 'number' ? content > 0 : !!content

export const generateIconFor = async (props: BadgeProps) => {
  const {
    src,
    content: badge,
    textColor,
    badgeColor,
    badgeSize
  } = getProps(props)
  const [[canvas, context], release] = getCanvasFromPool()
  const image = await getImage(src)
  context.clearRect(0, 0, drawBadgeSize, drawBadgeSize)
  context.drawImage(image, 0, 0, drawBadgeSize, drawBadgeSize)
  if (shouldDrawContent(badge)) {
    drawBadgeCircle(canvas, context, badgeColor, badgeSize)
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = textColor
    const content = getContent(badge)
    if (content) {
      const doubleDigit = content.length > 1
      context.font = `${doubleDigit ? 14 : 18}px sans-serif`
      context.fillText(
        content,
        canvas.width - badgeSize / 2 - padding,
        badgeSize / 2 + padding + 1
      )
    }
  }
  const datastring = canvas.toDataURL('image/png')
  release()
  return datastring
}
