# use-app-badge

Cross-browser wrapper for Navigator Badge API

Wraps the [Badging API](https://developer.mozilla.org/en-US/docs/Web/API/Badging_API)
into an cross-browser set of utilities for easier feature detection
and a more consistent behaviour between browsers.

![Badge API on Windows Taskbar](../../screenshots/windows.png "Badge API on Windows Taskbar")

## Features

- TypeScript support
- Under 580 bytes GZipped
- `setAppBadge` and `clearAppBadge` throw errors if webapp is not installed or running in an insecure context
- Safely detect and fallback on unsupported browsers using `isAppBadgeSupported` method

## Installation

**pnpm**

```pnpm
pnpm add use-app-badge
```

**Yarn**

```yarn
yarn add use-app-badge
```

**npm**

```npm
npm install use-app-badge
```

## API

```tsx
type FavIcon = {
  src: string
  content?: number | string | boolean
  badgeColor?: string
  textColor?: string
  badgeSize?: number
}

const useAppBadge = ({ favIcon }?: { favIcon: FavIcon; }): {
  set: (contents?: number) => Promise<void>
  clear: () => Promise<void>
  requestPermission: () => Promise<boolean>
  isAllowed: () => boolean
  isSupported: () => boolean
  count: number
  icon: string
}

const AppBadge = ({ favIcon, count }: { favIcon?: FavIcon; count: number }): JSX.Element
```