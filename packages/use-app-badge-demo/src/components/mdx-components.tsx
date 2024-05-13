import React, { useMemo } from 'react'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { cx } from 'class-variance-authority'
import Link from './link'
import Typography from './text'

type InsetProps = { inset?: 'both' | 'left' | 'right' | 'none' }

type ImageProps = React.HTMLProps<HTMLImageElement> & InsetProps

const CustomImage: React.FC<ImageProps & { project: string } & InsetProps> = ({
  project,
  src: initialSrc = '',
  title,
  alt: initialAlt,
  className,
  inset = 'both',
  ...rest
}) => {
  if (!initialSrc) {
    return null
  }
  const src =
    initialSrc.startsWith('./') || initialSrc.startsWith('/')
      ? initialSrc.replace(
          /^(\.)?\//,
          `https://raw.githubusercontent.com/woofers/${project}/main/`
        )
      : initialSrc
  const meta =
    initialAlt === 'img' ? { alt: title } : { alt: initialAlt, title }
  return (
    <img
      className={cx(
        'rounded-lg mt-2 mb-4',
        inset === 'both' && 'mx-auto',
        inset === 'left' && 'ml-auto',
        inset === 'right' && 'mr-auto',
        className
      )}
      src={src}
      {...meta}
      {...rest}
    />
  )
}

const withCustomImage = (project: string) => {
  const Component: React.FC<ImageProps> = props => (
    <CustomImage project={project} {...props} />
  )
  return Component
}

type TextProps = React.ComponentProps<typeof Typography>

type LinkProps = React.ComponentProps<typeof Link>

const videoTypes = ['mov', 'mp4', 'mpeg']
const prefix = '\\.'
const videoType = new RegExp(
  `(${prefix}${videoTypes.reduce((a, b) => `${a}|${prefix}${b}`)})$`
)

const Anchor: React.FC<LinkProps> = ({ href, ...rest }) => {
  if (videoType.test(href ?? '')) {
    return (
      <video
        src={href}
        controls
        data-video={true}
        muted
        className="peer inline-flex w-full [max-width:calc(49.5%-8px)] rounded-lg mb-4 min-h-[200px] peer-data-[video]:ml-4"
      />
    )
  }
  return <Link href={href} {...rest} />
}
Anchor.displayName = Anchor.name

type Meta = {
  project: string
}

const createComponents = (meta: Meta) => {
  const Img = withCustomImage(meta.project)
  return {
    Image,
    img: Img,
    ul: ({ className, ...rest }: React.HTMLProps<HTMLUListElement>) => (
      <ul className={cx('[list-style:square]', className)} {...rest} />
    ),
    pre: (props: React.HTMLProps<HTMLPreElement>) => (
      <pre
        {...props}
        className="rounded-xl mb-2.5 mt-2 [line-height:1.42] bg-[#030202]! text-[#aaaaca] [overflow:auto] [overflow-wrap:normal] p-6 text-xs grayscale-[20%] sm:text-sm"
      />
    ),
    a: Anchor,
    strong: ({ className, ...rest }: React.HTMLProps<HTMLSpanElement>) => (
      <strong {...rest} className={cx('', className)} />
    ),
    h1: (props: TextProps) => null,
    h2: ({ className, ...rest }: TextProps) => (
      <Typography
        type="h4"
        font="serif"
        fontWeight="medium"
        className={cx('mt-2 mb-1', className)}
        {...rest}
        as="h2"
      />
    ),
    h3: ({ className, ...rest }: TextProps) => (
      <Typography
        type="h4"
        font="serif"
        fontWeight="regular"
        className={cx('mt-2 mb-1', className)}
        {...rest}
        as="h3"
      />
    ),
    h4: ({ className, ...rest }: TextProps) => (
      <Typography
        type="h6"
        font="serif"
        fontWeight="medium"
        className={cx('mt-2 mb-1', className)}
        {...rest}
        as="h4"
      />
    ),
    h5: ({ className, ...rest }: TextProps) => (
      <Typography
        type="h6"
        font="serif"
        fontWeight="medium"
        className={cx('mt-2 mb-1', className)}
        {...rest}
        as="h5"
      />
    ),
    h6: (props: TextProps) => (
      <Typography type="h6" font="serif" {...props} as="h5" />
    ),
    p: (props: TextProps) => <Typography type="body1" {...props} as="p" />
  }
}

type MdxProps = {
  code: string
  meta?: Meta
}

export const Mdx: React.FC<MdxProps> = ({ code, meta = { project: '' } }) => {
  const Component = useMDXComponent(code)
  const components = useMemo(() => createComponents(meta), [meta])
  return <Component components={components} />
}
