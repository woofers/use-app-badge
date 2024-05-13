import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cx } from 'class-variance-authority'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'use-app-badge',
  description: 'Demo app to show Badge API with use-app-badge',
  manifest: '/use-app-badge/manifest.webmanifest',
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://jaxs.onl/use-app-badge')
      : new URL('http://localhost:3000/use-app-badge'),
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico',
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
  themeColor: '#151516',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
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
      <body className={cx(inter.className, 'bg-black', 'text-secondary')}>
        {children}
      </body>
    </html>
  )
}
