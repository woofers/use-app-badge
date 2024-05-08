import { useSyncExternalStore } from 'react'

const initialData = {
  loaded: false,
  didPromptInstall: false,
  canInstall: false,
  isInstalled: false,
  installDenied: false,
  installedButNotOpen: false,
  install: () => {}
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
    data = { ...data, loaded: true, isInstalled: true }
    return noop
  }

  let isInstalledTimeout: ReturnType<typeof setTimeout> | null = null
  if ('onappinstalled' in window) {
    isInstalledTimeout = setTimeout(() => {
      data = {
        ...data,
        loaded: true,
        isInstalled: true,
        canInstall: false,
        installedButNotOpen: true
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
        isInstalled: false,
        canInstall: true,
        install: () => {
          const promptInstall = async () => {
            data = { ...data, didPromptInstall: true, loaded: true }
            const { outcome } = await e.prompt()
            if (outcome === 'dismissed') data = { ...data, installDenied: true }
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
    data = { ...data, isInstalled: true, loaded: true }
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

export const useInstallPrompt = () =>
  useSyncExternalStore(setupInstallEvents, getInstallStatus, getInstallStatus)
