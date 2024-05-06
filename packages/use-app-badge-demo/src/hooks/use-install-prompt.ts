import { useSyncExternalStore } from 'react'

const initialData = {
  didPromptInstall: false,
  canInstall: false,
  isInstalled: false,
  installDenied: false,
  install: () => { }
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

const isBeforeInstallPromptEvent = (e: Event | BeforeInstallPromptEvent): e is BeforeInstallPromptEvent =>
  !!e && 'userChoice' in e

const setupInstallEvents = (onChange: () => void) => {
  if (typeof window === 'undefined' || !('BeforeInstallPromptEvent' in window)) {
    return () => {
      // pass
    }
  }
  const onBeforeInstall = (e: Event) => {
    if (isBeforeInstallPromptEvent(e) && !data.canInstall) {
      data = {
        ...data, 
        canInstall: true,
        install: () => {
          const promptInstall = async () => {
            data.didPromptInstall = true
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
    data = { ...data, isInstalled: true }
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
  return useSyncExternalStore(setupInstallEvents, getInstallStatus, getInstallStatus)
}
