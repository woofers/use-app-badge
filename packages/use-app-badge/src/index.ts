import { generateIconFor } from './icon'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type BadgeConfig = {
  src: string
  badge: string
  badgeColor: string
  textColor: string
  badgeBackgroundSrc: string
  badgeSize: string
}

const AppBadge: React.FC<{}> = () => null

const hasNotificationPermission = async () => {
  let { state } = await navigator.permissions.query({
    name: 'notifications'
  })
  return state
}

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission()
  return permission !== 'default' ? permission : 'denied'
}

const checkNotificationPermission = async () => {
    console.log('hi')
  let state = await hasNotificationPermission()
  console.log('hi', state)
  if (state === 'prompt') {
    state = await requestNotificationPermission()
  }
  return state !== 'denied'
}

const isBadgeAllowed = () =>
  hasNotificationPermission()
    .then(state => state === 'granted')
    .catch(() => false)

const hasNavigator = () => typeof window !== 'undefined' && navigator
const hasNotification = () =>
  typeof window !== 'undefined' && 'Notification' in window
const isSupported = () =>
  hasNavigator() && hasNotification() && 'setAppBadge' in navigator
const createError = () => new DOMException('Badging API not available')

const useIsSupported = () => {
  const [data, setData] = useState(false)
  useEffect(() => {
    setData(isSupported())
  }, [])
  const supported = useCallback(() => data, [data])
  return supported
}

const useCreateAppBadge = () => {
  const [count, setCount] = useState(0)
  const [hasPermission, setPermission] = useState<boolean | undefined>()
  const isSupported = useIsSupported()
  const hasSupport = isSupported()
  const fallbackIfUnsupported = useCallback(
    <T, A>(func: (...args: A[]) => Promise<T>, ...args: A[]) => {
      return async () => {
        if (!hasSupport) {
          throw createError()
        }
        console.log(args, 'hi')
        return await func(...args)
      }
    },
    [hasSupport]
  )
  const promptForPermission = useCallback(async () => {
    try {
      const result = await fallbackIfUnsupported(checkNotificationPermission)()
      setPermission(result)
      return result
    } catch (e) {
      setPermission(false)
      throw e
    }
  }, [fallbackIfUnsupported])
  const isAllowed = useCallback(() => {
    if (typeof hasPermission === 'undefined') {
      throw new Error('`isAllowed()` was called before `promptForPermission()`')
    }
    return hasPermission
  }, [hasPermission])
  const setBadge = useCallback(
    async (contents?: number) => {
      await fallbackIfUnsupported(() => navigator.setAppBadge(contents))()
      setCount(contents)
    },
    [fallbackIfUnsupported]
  )
  const clearBadge = useCallback(async () => {
    await fallbackIfUnsupported(() => navigator.clearAppBadge())()
    setCount(0)
  }, [fallbackIfUnsupported])
  const data = useMemo(
    () =>
      ({
        set: setBadge,
        clear: clearBadge,
        promptForPermission,
        isAllowed,
        isSupported,
        count
      }) as const,
    [count, setBadge, clearBadge, isAllowed, promptForPermission]
  )
  return data
}

const useAppBadge = () => {
  const { set, clear, count, promptForPermission, isAllowed, isSupported } =
    useCreateAppBadge()
  const badge = !isSupported() && typeof window !== 'undefined' ? generateIconFor({ src: '/favicon.ico' }) : ''
  useEffect(() => {
    return () => {
      clear()
    }
  }, [clear])
  return { set, clear, count, promptForPermission, badge, isAllowed, isSupported }
}

export { useAppBadge }
