import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import favicon from '../images/favicon.ico'
import { cx } from 'class-variance-authority'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'use-app-badge',
  description: '',
  manifest: '/manifest.webmanifest',

  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://jaxs.onl/use-app-badge')
      : new URL('https://scaling-garbanzo-xqj5rgq545f9qw-3000.app.github.dev/'),
  icons: {
    icon: [
      {
        rel: 'icon',
        url: favicon.src,
        sizes: '48x48',
        media: '(pointer: coarse), (pointer: fine)'
      },
      {
        rel: 'icon',
        url: favicon.src,
        sizes: '48x48'
      }
    ],

    apple: [
      ...[72, 96, 128, 144, 152, 192, 384, 512].map(size => ({
        url: `/icons/mask-${size}x${size}.png`,
        sizes: `${size}x${size}`,
        type: 'image/png'
      }))
    ]
  }
} satisfies Metadata

export const viewport = {
  themeColor: '#151516'
} satisfies Viewport

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `navigator.serviceWorker.register('sw.js')`
          }}
        />
      </head>
      <body className={cx(inter.className, 'bg-background', 'text-secondary')}>
        {children}
      </body>
    </html>
  )
}
