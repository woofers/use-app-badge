declare global {
  var __isDev__: boolean
}

export const isRecentSafari = () => navigator.vendor.startsWith('Apple')

const isInstalled = () =>
  'matchMedia' in window &&
  window.matchMedia(
    '(display-mode: standalone), (display-mode: minimal-ui), (display-mode: window-controls-overlay)'
  ).matches

const hasNotifcations = () => 'Notification' in window

export const isAppBadgeSupported = () =>
  typeof window !== 'undefined' &&
  hasNotifcations() &&
  isInstalled() &&
  navigator &&
  'setAppBadge' in navigator

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

type NavigatorFunctionKey<K> = K extends keyof Navigator
  ? Navigator[K] extends (...args: any[]) => any
    ? K
    : never
  : never

const bindFunc =
  <
    K extends NavigatorFunctionKey<keyof Navigator>,
    F extends (...args: Parameters<Navigator[K]>) => ReturnType<Navigator[K]>
  >(
    key: K
  ) =>
  (...args: Parameters<Navigator[K]>) => {
    if (!(key in navigator)) {
      // istanbul ignore next
      if (__isDev__) {
        if (typeof window === 'undefined') {
          throw new DOMException(
            `Failed to execute '${key}': Badge API not supported in browser`
          )
        }
        throw new DOMException(
          `Failed to execute '${key}': Badge API attempted to run in an insecure-context`
        )
      }
      throw new DOMException(`Badge API not supported`)
    }
    return (navigator[key] as unknown as F)(...args)
  }

export const clearAppBadge = bindFunc('clearAppBadge')
export const setAppBadge = bindFunc('setAppBadge')

export const requestAppBadgePermission = async () => {
  if (!isAppBadgeSupported()) {
    return false
  } else if (!isRecentSafari()) {
    return true
  }
  let state = await hasNotificationPermission()
  if (state === 'prompt') {
    state = await requestNotificationPermission()
  }
  return state !== 'denied'
}
