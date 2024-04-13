import { useEffect, useMemo } from 'react'

const AppBadge: React.FC<{}> = () => null

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission()
  return permission !== 'default' ? permission : 'denied'
}

const checkNotificationPermission = async () => {
  let { state, ...rest } = await navigator.permissions.query({
    name: 'notifications'
  })
  if (state === 'prompt') {
    state = await requestNotificationPermission()
  }
  if (state === 'denied') {
    // The user has denied the permission
  }
  // You can use the Badging API
}

const hasNavigator = () => typeof window !== 'undefined' && navigator
const hasNotification = () =>
  typeof window !== 'undefined' && 'Notification' in window
const isSupported = () =>
  hasNavigator() && hasNotification() && 'setAppBadge' in navigator

const createError = () =>
  Promise.reject(new DOMException('Badging API not available'))

const createAppBadge = () => {
  let hasSupport = isSupported()
  return {
    set: hasSupport ? navigator.setAppBadge : createError(),
    clear: hasSupport ? navigator.clearAppBadge : createError()
  } as { set: Navigator['setAppBadge']; clear: Navigator['clearAppBadge'] }
}

const useAppBadge = () => {
  const { set, clear } = useMemo(() => createAppBadge(), [])
  useEffect(() => {
    return () => {
      clear()
    }
  }, [clear])
  return { set, clear }
}

export { useAppBadge }
