'use client'
import { useAppBadge } from 'use-app-badge'
import favicon from '../images/favicon.ico'
import React, { useEffect } from 'react'
import { cx } from 'class-variance-authority'
import { useInstallPrompt } from '../hooks/use-install-prompt'

const hasNavigator = () =>
  typeof window !== 'undefined' && 'navigator' in window
const hasBadgeApi = () => hasNavigator() && 'setAppBadge' in navigator
const isRecentSafari = () =>
  hasNavigator() && navigator.vendor.startsWith('Apple')

const colors = {
  initial: 'bg-[#bde8ff]',
  denied: 'bg-[#f3999d]',
  installed: 'bg-[#bdffd4]',
  unsupported: 'bg-[#feaf82]'
} as const

const Button: React.FC<
  React.ComponentProps<'button'> & { state: keyof typeof colors }
> = ({ className, onClick, type = 'button', state, ...rest }) => (
  <button
    {...rest}
    onClick={onClick}
    className={cx(
      className,
      colors[state],
      !!onClick ? 'cursor-pointer' : 'cursor-not-allowed',
      'mt-2 transform-[rotate(-2deg)] text-xs font-semibold px-3 py-[1px] rounded-xl text-background'
    )}
    type={type}
  />
)

export default function Home() {
  const {
    set,
    clear,
    countAsNumber: count,
    isSupported,
    requestPermission
  } = useAppBadge({ favIcon: { src: favicon.src } })
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const timeout = setTimeout(() => set(1), 50)
    return () => {
      clearTimeout(timeout)
    }
  }, [set])

  const { install, status } = useInstallPrompt()
  const supported = isSupported()
  const installStatus = !supported ? status : 'install'
  const atMax = count > 99
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col items-center gap-y-2 py-10 w-[240px]">
        <div className="w-[188px]">
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
                <div
                  className={cx(
                    atMax ? 'text-[17px]' : 'text-2xl',
                    'font-bold absolute top-0 left-0 w-[40px] h-[40px] flex items-center justify-center'
                  )}
                >
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
        {installStatus !== 'loading' && (
          <div className="w-full flex justify-start pl-[24px]">
            {installStatus === 'initial' && (
              <Button state="initial" onClick={install}>
                install web app to see demo
              </Button>
            )}
            {installStatus === 'denied' && (
              <Button state="denied" disabled>
                install prompt dismissed
              </Button>
            )}
            {(installStatus === 'install' ||
              installStatus === 'install-not-open') && (
                <Button state="installed" disabled>
                  {status !== 'install-not-open'
                    ? 'installed'
                    : 'installed but not open as an app'}
                </Button>
              )}
            {installStatus === 'unsupported' && (
              <Button state="unsupported" disabled>
                {isRecentSafari() && hasBadgeApi()
                  ? 'app must be installed from safari'
                  : 'unsupported browser'}
              </Button>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
