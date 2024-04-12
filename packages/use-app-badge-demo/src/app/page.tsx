'use client'
import { useAppBadge, AppBadge } from 'use-app-badge'
import favicon from '../images/favicon.ico'
import { useEffect } from 'react'
import { cx } from 'class-variance-authority'

export default function Home() {
  const { set, clear, count, isAllowed, isSupported, requestPermission } =
    useAppBadge({ favIcon: { src: favicon.src } })
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const timeout = setTimeout(() => set(1), 50)
    return () => {
      clearTimeout(timeout)
    }
  }, [set])

  const atMax = count > 99
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="py-10">
        <div className="relative">
          <h1 className="text-2xl font-bold w-[188px] pb-4">use-app-badge</h1>

          <div className="absolute top-[-12px] right-[-12px]">
            <div
              className={cx(
                'bg-[#ff0000] inline-block p-5 rounded-full relative [transition:transform_ease-out_0.25s]',
                count > 0
                  ? '[transform:scale(0.5)_translateX(13px)]'
                  : '[transform:scale(0)_translateX(13px)]'
              )}
            >
              <div className={cx(atMax ? 'text-[17px]' : 'text-2xl', "font-bold absolute top-0 left-0 w-[40px] h-[40px] flex items-center justify-center")}>
                {atMax ? '99+' : count}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-[188px] items-start">
          <button
            className="text-accent cursor-pointer"
            onClick={() => void requestPermission()}
          >
            request permission
          </button>
          <button
            className="text-accent cursor-pointer"
            onClick={() => void set(count + 1)}
          >
            increment badge count
          </button>
          <button
            className="text-accent cursor-pointer"
            onClick={() => void clear()}
          >
            clear badge
          </button>
        </div>
        <div className="flex flex-col gap-y-2 w-[188px] items-start pt-4">
          <div>supported: {isSupported() ? 'yes' : 'no'}</div>
        </div>
      </div>
    </main>
  )
}
