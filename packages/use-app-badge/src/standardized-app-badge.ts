const isRecentSafari = () =>
  window.matchMedia('@supports (hanging-punctuation: first)').matches

const isInstalled = () =>
  'matchMedia' in window &&
  window.matchMedia(
    ['standalone', 'minimal-ui', 'window-controls-overlay']
      .map(mode => `(display-mode: ${mode})`)
      .join(', ')
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
      throw new DOMException(
        `Failed to execute '${key}': Badge API not supported in browser or attempted to run in an insecure-context`
      )
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
