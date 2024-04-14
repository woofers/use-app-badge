'use client'

import Image from 'next/image'
import { useAppBadge } from 'use-app-badge'

export default function Home() {
  const { set, clear, count, promptForPermission, isSupported, isAllowed } = useAppBadge()
  console.log(count)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      use-app-badge
      <button onClick={() => void promptForPermission()}>ask</button>
      <button onClick={() => void set(count + 1)}>inc</button>
      <button onClick={() => void clear()}>clear</button>
    </main>
  )
}
