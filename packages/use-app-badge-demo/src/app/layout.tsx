import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import favicon from '../images/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'testuse-app-badge',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
