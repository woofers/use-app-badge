import { generateIconFor } from './icon'
import { useCallback, useEffect, useMemo, useState } from 'react'

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
  let state = await hasNotificationPermission()
  if (state === 'prompt') {
    state = await requestNotificationPermission()
  }
  return state !== 'denied'
}

const isInstalled = () =>
  'matchMedia' in window &&
  window.matchMedia(
    '(display-mode: standalone), (display-mode: minimal-ui), (display-mode: window-controls-overlay)'
  ).matches

const hasNotifcations = () => 'Notification' in window
const isSupported = () =>
  typeof window !== 'undefined' &&
  hasNotifcations() &&
  isInstalled() &&
  navigator &&
  'setAppBadge' in navigator

const createError = () => new DOMException('Badging API not available')
const createAllowedError = () =>
  new Error('`isAllowed()` was called before `promptForPermission()`')

const useIsSupported = () => {
  const [data, setData] = useState(false)
  useEffect(() => {
    setData(isSupported())
  }, [])
  const supported = useCallback(() => data, [data])
  return supported
}

type FavIcon = Omit<Parameters<typeof generateIconFor>[0], 'content'>

const noop = () => {}
const useAppBadge = ({ favIcon }: { favIcon: FavIcon | false } = { favIcon: false }) => {
  const [count, setCount] = useState(0)
  const [badge, setBadge]= useState('')
  const hasIcon = !!favIcon
  const {src, badgeColor, badgeSize, textColor} = favIcon || {}
  const [hasPermission, setPermission] = useState<boolean | undefined>()
  const isSupported = useIsSupported()
  const hasSupport = isSupported()
  const fallbackIfUnsupported = useCallback(
    <T>(func: () => Promise<T>) => {
      return async () => {
        if (!hasSupport) {
          throw createError()
        }
        const data = await func()
        return data
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
      throw createAllowedError()
    }
    return hasPermission
  }, [hasPermission])
  const setAppBadge = useCallback(
    async (contents?: number) => {
      try {
        await fallbackIfUnsupported(() => navigator.setAppBadge(contents))()
      } catch (e) {
        if (!hasIcon) {
          throw e
        }
      }
      setCount(contents)
    },
    [fallbackIfUnsupported, hasIcon]
  )
  const clearAppBadge = useCallback(async () => {
    try {
      await fallbackIfUnsupported(() => navigator.clearAppBadge())()
    } catch (e) {
      if (!hasIcon) {
        throw e
      }
    }
    setCount(0)
  }, [fallbackIfUnsupported, hasIcon])
  const data = useMemo(
    () =>
      ({
        set: setAppBadge,
        clear: clearAppBadge,
        promptForPermission,
        isAllowed,
        isSupported,
        count,
        icon: badge
      }) as const,
    [count, setAppBadge, clearAppBadge, isAllowed, promptForPermission, badge]
  )

  useEffect(() => {
    if (!hasSupport) {
      return
    }
    return () => {
      data.clear().catch(noop)
    }
  }, [data.clear, hasSupport])
  
  useEffect(() => {
    console.log(hasIcon, count, src, badgeColor, badgeSize, textColor, hasPermission)
    const generateIcon = !isSupported() && !hasPermission && hasIcon
    if (generateIcon && count > 0) {
      const update = async () => {
        const icon = await generateIconFor({ src, content: count, badgeColor, badgeSize, textColor })
        setBadge(icon)
        console.log(src, icon)
        const meta = (document.querySelector('link[rel="icon"]') || {}) as { href: string }
        if (meta) meta.href = icon
      }
      update()
    }
  }, [hasIcon, count, src, badgeColor, badgeSize, textColor, hasPermission])

  return data
}

const AppBadge: React.FC<{
  favIcon?: FavIcon
  count: number
}> = ({ favIcon = false as unknown as FavIcon, count }) => {
  const { promptForPermission, set, isAllowed, clear } = useAppBadge({ favIcon })
  const allowed = (() => {
    try {
      return isAllowed()
    } catch (_) {

    }
    return false
  })()
  useEffect(() => {
    if (count > 0) {
      set(count)
    } else {
      clear()
    }
  }, [count, allowed, set, clear])
  useEffect(() => {
    promptForPermission().catch(noop)
  }, [promptForPermission])
  return null
}

export { useAppBadge, AppBadge }
