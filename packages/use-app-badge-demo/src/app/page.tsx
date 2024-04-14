'use client'

import Image from 'next/image'
import { useAppBadge, AppBadge } from 'use-app-badge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      use-app-badge
      <button onClick={() => void promptForPermission()}>ask</button>
      <button onClick={() => void set(count + 1)}>inc</button>
      <button onClick={() => void clear()}>clear</button>
      <AppBadge favIcon={{ src: '/favicon.ico' }} count={1} />
    </main>
  )
}
