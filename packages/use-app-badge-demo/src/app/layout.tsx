import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import favicon from '../images/favicon.ico'
import { cx } from 'class-variance-authority'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'use-app-badge',
  description: '',
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
      <body className={cx(inter.className, 'bg-background', 'text-secondary')}>
        {children}
      </body>
    </html>
  )
}
