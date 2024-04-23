# standardized-app-badge

Cross-browser wrapper for Navigator Badge API

Wraps the [Badging API](https://developer.mozilla.org/en-US/docs/Web/API/Badging_API)
into an cross-browser set of utilities for easier feature detection
and a more consistent behaviour between browsers.

## Features

- TypeScript support
- Under 580 bytes GZipped
- `setAppBadge` and `clearAppBadge` throw errors if webapp is not installed or running in an insecure context
- Safely detect and fallback on unsupported browsers using `isAppBadgeSupported` method

## Installation

**pnpm**

```pnpm
pnpm add standardized-app-badge
```

**Yarn**

```yarn
yarn add standardized-app-badge
```

**npm**

```npm
npm install standardized-app-badge
```

## API

```tsx
export const isAppBadgeSupported: () => boolean;
export const clearAppBadge: () => Promise<void>;
export const setAppBadge: (contents?: number) => Promise<void>;
export const isAppBadgeAllowed: () => "denied" | "granted" | "unknown";
export const requestAppBadgePermission: () => Promise<boolean>;
```