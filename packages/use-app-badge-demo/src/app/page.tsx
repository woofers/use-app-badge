'use client'
import { useAppBadge, AppBadge } from 'use-app-badge'
import favicon from '../images/favicon.ico'
import { useCallback, useEffect } from 'react'
import { cx } from 'class-variance-authority'
import { useInstallPrompt } from '../hooks/use-install-prompt'

const hasNavigator = () => typeof window !== 'undefined' && 'navigator' in window
const hasBadgeApi = () => hasNavigator() && 'setAppBadge' in navigator
const isRecentSafari = () => hasNavigator() && navigator.vendor.startsWith('Apple')

const Button: React.FC<React.ComponentProps<'button'>> = ({ className, type = 'button', ...rest }) => 
  <button {...rest} className={cx(className = "mt-2 transform-[rotate(-2deg)] text-xs font-semibold cursor-pointer px-3 py-[1px] bg-[#feaf82] rounded-xl text-background", className)} type={type} />

export default function Home() {
  const { set, clear, countAsNumber: count, isSupported, requestPermission } =
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

  const { install, canInstall, isInstalled, installDenied } = useInstallPrompt()

  const supported = isSupported()
  const installStatus = (() => {
    if (installDenied) {
      return 'denied'
    } else if (isInstalled || supported) {
      return 'installed'
    } else if (canInstall) {
      return 'initial'
    } else {
      return 'unsupported'
    }
  })()

  console.log(canInstall)

  const atMax = count > 99
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="py-10">
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
        {installStatus === 'initial' && (
          <Button onClick={install}>install web app to see demo</Button>
        )}
        {installStatus === 'denied' && (
          <Button disabled>install prompt dismissed</Button>
        )}
        {installStatus === 'installed' && (
          <Button disabled>installed</Button>
        )}
        {installStatus === 'unsupported' && (
          <Button disabled>{isRecentSafari() && hasBadgeApi() ? 'app must be installed from safari' : 'unsupported browser'}</Button>
        )}
      </div>
    </main>
  )
}
