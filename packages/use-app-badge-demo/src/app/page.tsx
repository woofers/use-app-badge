'use client'

import Image from 'next/image'
import { useAppBadge, AppBadge } from 'use-app-badge'
import favicon from '../images/favicon.ico'

export default function Home() {
  const { set, clear, count, isAllowed, isSupported, requestPermission } =
    useAppBadge({ favIcon: { src: favicon.src } })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      use-app-badge
      <button onClick={() => void requestPermission()}>ask</button>
      <button onClick={() => void set(count + 1)}>inc</button>
      <button onClick={() => void clear()}>clear</button>
    </main>
  )
}
