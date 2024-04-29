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
} from 'standardized-app-badge'
import { generateIconFor } from './icon'

const buildGenericError = () => new Error(`Badge API not supported`)

const buildSeverSideRenderError = (func: string) => async (): Promise<void> => {
  // istanbul ignore next
  if (process.env.NODE_ENV === 'development') {
    throw new Error(`'${func}' can not be called on server`)
  }
  throw buildGenericError()
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

type FavIcon = Omit<Parameters<typeof generateIconFor>[0], 'content'> & {
  updateMeta?: boolean
}

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
  const [count, setCount] = useState(0 as number | true)
  const [icon, setIcon] = useState('')
  const hasIcon = !!favIcon
  const {
    src,
    badgeColor,
    badgeSize,
    textColor,
    updateMeta: meta
  } = favIcon || {}
  const updateMeta = meta ?? true

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
      if (process.env.NODE_ENV === 'development') {
        throw new Error("'isAllowed()' was called before 'requestPermission()'")
      }
      throw buildGenericError()
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
      setCount(typeof contents !== 'number' ? true : contents)
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
    if (typeof window === 'undefined' || !isAllowed() || !hasIcon) {
      return
    }
    if (typeof count !== 'boolean' && count <= 0) {
      setIcon(src)
    }
    const update = async () => {
      const icon = await generateIconFor({
        src,
        content: count,
        badgeColor,
        badgeSize,
        textColor
      })
      setIcon(icon)
    }
    void update()
  }, [hasIcon, count, src, badgeColor, badgeSize, textColor, isAllowed])

  useEffect(() => {
    let ogMeta: string
    if (typeof window === 'undefined') {
      return
    }
    /* prettier-ignore */
    const getElement = () => (document.querySelector('link[rel="icon"]:not([media])') || {}) as { href: string }
    if (updateMeta && icon) {
      const meta = getElement()
      if (meta) {
        if (typeof ogMeta === 'undefined') ogMeta = meta.href
        meta.href = icon
      }
    }
    return () => {
      const element = getElement()
      if (element && typeof ogMeta !== 'undefined') {
        element.href = ogMeta
      }
    }
  }, [icon, updateMeta])

  return data
}

const AppBadge: React.FC<{
  favIcon?: FavIcon
  count: number | true
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
    const isSet = typeof count === 'boolean'
    if (isSet || count > 0) {
      !isSet ? set(count) : set()
    } else {
      clear()
    }
  }, [count, allowed, set, clear])
  return null
}

export { useAppBadge, AppBadge }
