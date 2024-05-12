import { useMemo, useSyncExternalStore } from 'react'

const initialData = {
  loaded: false,
  didPromptInstall: false,
  canInstall: false,
  install: () => {},
  status: 'unsupported' as InstallStatus
}

let data = initialData

type BeforeInstallPromptResult = {
  platform: string
  outcome: 'accepted' | 'dismissed'
}

type BeforeInstallPromptEvent = {
  platforms: string[]
  userChoice: Promise<BeforeInstallPromptResult>
  prompt: () => Promise<BeforeInstallPromptResult>
}

type InstallStatus =
  | 'denied'
  | 'initial'
  | 'install-not-open'
  | 'install'
  | 'unsupported'

const isBeforeInstallPromptEvent = (
  e: Event | BeforeInstallPromptEvent
): e is BeforeInstallPromptEvent => !!e && 'userChoice' in e

const setupInstallEvents = (onChange: () => void) => {
  const noop = () => {
    // pass
  }
  if (
    typeof window === 'undefined' ||
    !('BeforeInstallPromptEvent' in window)
  ) {
    data = { ...data, loaded: true }
    return noop
  }

  // Could match media??
  const isInsalledAlready =
    'matchMedia' in window &&
    window.matchMedia(
      '(display-mode: standalone), (display-mode: minimal-ui), (display-mode: window-controls-overlay)'
    ).matches

  if (isInsalledAlready) {
    data = { ...data, loaded: true, status: 'install' }
    return noop
  }

  let isInstalledTimeout: ReturnType<typeof setTimeout> | null = null
  if ('onappinstalled' in window) {
    isInstalledTimeout = setTimeout(() => {
      data = {
        ...data,
        status: 'install-not-open',
        loaded: true,
        canInstall: false
      }
      onChange()
    }, 350)
  }

  const onBeforeInstall = (e: Event) => {
    if (typeof isInstalledTimeout === 'number') {
      clearTimeout(isInstalledTimeout)
      isInstalledTimeout = null
    }
    if (isBeforeInstallPromptEvent(e) && !data.canInstall) {
      data = {
        ...data,
        loaded: true,
        canInstall: true,
        status: 'initial',
        install: () => {
          const promptInstall = async () => {
            data = { ...data, didPromptInstall: true, loaded: true }
            const { outcome } = await e.prompt()
            if (outcome === 'dismissed') data = { ...data, status: 'denied' }
            onChange()
          }
          if (!data.didPromptInstall) void promptInstall()
        }
      }
      onChange()
    }
    e.preventDefault()
  }
  const onInstall = () => {
    data = { ...data, loaded: true, status: 'install' }
    onChange()
  }
  window.addEventListener('beforeinstallprompt', onBeforeInstall)
  window.addEventListener('appinstalled', onInstall)
  return () => {
    window.removeEventListener('beforeinstallprompt', onBeforeInstall)
    window.removeEventListener('appinstalled', onInstall)
    data = initialData
  }
}

const getInstallStatus = () => data

export const useInstallPrompt = () => {
  const { install, loaded, status } = useSyncExternalStore(
    setupInstallEvents,
    getInstallStatus,
    getInstallStatus
  )
  console.log(loaded, status)
  return useMemo(
    () => ({ install, status: loaded ? status : ('loading' as const) }),
    [install, loaded, status]
  )
}
