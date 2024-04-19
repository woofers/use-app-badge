import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore
} from 'react'
import {
  isAppBadgeSupported,
  clearAppBadge,
  setAppBadge,
  requestAppBadgePermission,
  isRecentSafari
} from './standardized-app-badge'
import { generateIconFor } from './icon'
import { buildPermissionAllowedError, buildSeverSideRenderError } from './utils'

const serverSnapshot = {
  isAppBadgeSupported: () => false,
  clearAppBadge: buildSeverSideRenderError('clearAppBadge'),
  setAppBadge: buildSeverSideRenderError('setAppBadge') as (
    contents?: number
  ) => Promise<void>,
  requestAppBadgePermission: () => Promise.resolve(false)
}

const snapshot = {
  isAppBadgeSupported,
  clearAppBadge,
  setAppBadge,
  requestAppBadgePermission
}

const getServerSnapshot = () => serverSnapshot
const getSnapshot = () => snapshot
const emptySubscribe = () => () => {}

type FavIcon = Omit<Parameters<typeof generateIconFor>[0], 'content'>

const noop = () => {}
const useAppBadge = (
  { favIcon }: { favIcon: FavIcon | false } = { favIcon: false }
) => {
  const {
    setAppBadge: set,
    clearAppBadge: clear,
    isAppBadgeSupported,
    requestAppBadgePermission
  } = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot)
  const [hasPermission, setPermission] = useState<boolean | undefined>()
  const [count, setCount] = useState(0)
  const hasSupport = isAppBadgeSupported()

  const [badge, setBadge] = useState('')
  const hasIcon = !!favIcon
  const { src, badgeColor, badgeSize, textColor } = favIcon || {}

  const requestPermission = useCallback(async () => {
    try {
      const result = await requestAppBadgePermission()
      setPermission(result)
      return result
    } catch (e) {
      setPermission(false)
      throw e
    }
  }, [requestAppBadgePermission])
  const isAllowed = useCallback(() => {
    if (!hasSupport) {
      return false
    } else if (!isRecentSafari()) {
      return true
    }
    if (typeof hasPermission === 'undefined') {
      throw buildPermissionAllowedError()
    }
    return hasPermission
  }, [hasPermission, hasSupport])
  const setAppBadge = useCallback(
    async (contents?: number) => {
      try {
        await set(contents)
      } catch (e) {
        if (!hasIcon) {
          throw e
        }
      }
      setCount(contents)
    },
    [hasIcon, set]
  )
  const clearAppBadge = useCallback(async () => {
    try {
      await clear()
    } catch (e) {
      if (!hasIcon) {
        throw e
      }
    }
    setCount(0)
  }, [clear])
  const data = useMemo(
    () =>
      ({
        set: setAppBadge,
        clear: clearAppBadge,
        requestPermission,
        isAllowed,
        isSupported: isAppBadgeSupported,
        count,
        icon: badge
      }) as const,
    [
      setAppBadge,
      clearAppBadge,
      requestPermission,
      isAllowed,
      isAppBadgeSupported,
      count,
      badge
    ]
  )

  useEffect(
    () => () => {
      data.clear().catch(noop)
    },
    [data.clear]
  )
  useEffect(() => {
    const generateIcon = !isAllowed() && hasIcon
    if (generateIcon) {
      const update = async () => {
        const icon = await generateIconFor({
          src,
          content: count,
          badgeColor,
          badgeSize,
          textColor
        })
        setBadge(icon)
        const meta = (document.querySelector('link[rel="icon"]:not([media])') ||
          {}) as {
          href: string
        }
        if (meta) meta.href = icon
      }
      update()
    }
  }, [hasIcon, count, src, badgeColor, badgeSize, textColor, isAllowed])

  return data
}

const AppBadge: React.FC<{
  favIcon?: FavIcon
  count: number
}> = ({ favIcon = false as unknown as FavIcon, count }) => {
  const { set, clear, isAllowed } = useAppBadge({
    favIcon
  })
  const allowed = (() => {
    try {
      return isAllowed()
    } catch (_) {}
    return false
  })()
  useEffect(() => {
    if (count > 0) {
      set(count)
    } else {
      clear()
    }
  }, [count, allowed, set, clear])
  return null
}

export { useAppBadge, AppBadge }
