import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import favicon from '../images/favicon.ico'
import { cx } from 'class-variance-authority'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'use-app-badge',
  description: '',
  manifest: '/manifest.webmanifest',
  themeColor: '#151516',
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://jaxs.onl/use-app-badge')
      : new URL('https://scaling-garbanzo-xqj5rgq545f9qw-3000.app.github.dev/'),
  icons: [
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
  ]
} satisfies Metadata

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `navigator.serviceWorker.register('sw.js')` }} />
      </head>
      <body className={cx(inter.className, 'bg-background', 'text-secondary')}>
        {children}
      </body>
    </html>
  )
}
