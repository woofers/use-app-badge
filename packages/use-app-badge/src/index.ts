import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore
} from 'react'
import {
  isAppBadgeSupported,
  isAppBadgeAllowed,
  clearAppBadge,
  setAppBadge,
  requestAppBadgePermission
} from './standardized-app-badge'
import { generateIconFor } from './icon'

declare global {
  var __isDev__: boolean
}

const buildGenericError = () => new Error(`Badge API not supported`)

const buildSeverSideRenderError = (func: string) => () => {
  // istanbul ignore next
  if (__isDev__) {
    return Promise.reject<void>(
      new Error(`'${func}' can not be called on server`)
    )
  }
  return Promise.reject<void>(buildGenericError())
}

const serverSnapshot = {
  isAppBadgeSupported: () => false,
  clearAppBadge: buildSeverSideRenderError('clearAppBadge'),
  setAppBadge: buildSeverSideRenderError('setAppBadge') as (
    contents?: number
  ) => Promise<void>,
  requestAppBadgePermission: async () => false
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

const defaultFavIcon = false as unknown as FavIcon

const noop = () => {}
const useAppBadge = (
  { favIcon }: { favIcon: FavIcon } = { favIcon: defaultFavIcon }
) => {
  const {
    setAppBadge: set,
    clearAppBadge: clear,
    isAppBadgeSupported: isSupported,
    requestAppBadgePermission
  } = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot)
  const [hasPermission, setPermission] = useState<boolean | undefined>()
  const [count, setCount] = useState(0)
  const [icon, setIcon] = useState('')
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
    const state = isAppBadgeAllowed()
    if (state !== 'unknown') {
      return state === 'granted'
    }
    if (typeof hasPermission === 'undefined') {
      // istanbul ignore next
      if (__isDev__) {
        return new Error(
          "'isAllowed()' was called before 'requestPermission()'"
        )
      }
      return buildGenericError()
    }
    return hasPermission
  }, [hasPermission])
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
  }, [clear, hasIcon])
  const data = useMemo(
    () =>
      ({
        set: setAppBadge,
        clear: clearAppBadge,
        requestPermission,
        isAllowed,
        isSupported,
        count,
        icon
      }) as const,
    [
      setAppBadge,
      clearAppBadge,
      requestPermission,
      isAllowed,
      isSupported,
      count,
      icon
    ]
  )

  useEffect(
    () => () => {
      data.clear().catch(noop)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.clear]
  )
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const generateIcon = !isAllowed() && hasIcon
    const setBadge = (icon: string) => {
      setIcon(icon)
      const meta = (document.querySelector('link[rel="icon"]:not([media])') ||
        {}) as {
        href: string
      }
      if (meta) meta.href = icon
    }
    if (generateIcon && count <= 0) {
      setBadge(src)
    } else if (generateIcon) {
      const update = async () => {
        const icon = await generateIconFor({
          src,
          content: count,
          badgeColor,
          badgeSize,
          textColor
        })
        setBadge(icon)
      }
      update()
    }
  }, [hasIcon, count, src, badgeColor, badgeSize, textColor, isAllowed])

  return data
}

const AppBadge: React.FC<{
  favIcon?: FavIcon
  count: number
}> = ({ favIcon = defaultFavIcon, count }) => {
  const { set, clear, isAllowed } = useAppBadge({
    favIcon
  })
  const allowed = (() => {
    try {
      return isAllowed()
    } catch (_) { 
      // pass 
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
  return null
}

export { useAppBadge, AppBadge }
