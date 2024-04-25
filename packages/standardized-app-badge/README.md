# standardized-app-badge

Cross-browser wrapper for Navigator Badge API

Wraps the [Badging API](https://developer.mozilla.org/en-US/docs/Web/API/Badging_API)
into a cross-browser set of utilities for easier feature detection
and more consistent behaviour between browsers.

## Features

- TypeScript support
- Under 680 bytes GZipped
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

## Usage

```tsx
import { 
  setAppBadge,
  clearAppBadge, 
  isAppBadgeSupported,
  isAppBadgeAllowed,
  requestAppBadgePermission
} from 'standardized-app-badge'

const button = document.getElementById('button')
if (isAppBadgeSupported()) {
  button.onclick = () => {
    const request = async () => {
      const canSetAppBadge = await requestAppBadgePermission()
      if (canSetAppBadge) {
        setTimeout(() => {
          try {
            await setAppBadge(1)
            console.log('Set pending badge notification on dock or taskbar')
          } catch (e) {
            console.error('Could not set badge notification', e)
          }
        }, 1000)
        setTimeout(() => void clearAppBadge(), [10_000])
      } else {
        console.log('Could not get badge notification permission')
      }
    }
    void request()
  }
} else {
  button.onclick = () => {
    console.log('Unsupported browser')
  }
}
```

## Methods

```tsx
setAppBadge(contents?: number) => Promise<void> // throws DOMException
```

Sets the app badge icon on the associated installed
app either on the dock or taskbar.  If no
value is passed, only a indicator dot will be shown.
Otherwise the notification count is displayed.

In-order for this method to work:
- The webpage must be installed as an app.
- Running over a secure-context (HTTPS).
- Granted notification permission with `requestAppBadgePermission()` (for Safari iOS) 
  or enabled in the app settings (for MacOS Safari). 

This method will resolve if set successfully or throw an error if:
- The webpage is not installed as an app.
- The webpage is running in an insecure-context (HTTP).
- The browser does not support API.
- Permission was not granted (Safari)

#

```tsx
clearAppBadge() => Promise<void> // throws DOMException
```

Clears the app badge icon on the associated installed
app either on the dock or taskbar.

In-order for this method to work:
- The webpage must be installed as an app.
- Running over a secure-context (HTTPS).
- Granted notification permission with `requestAppBadgePermission()` (for Safari iOS) 
  or enabled in the app settings (for MacOS Safari).

This method will resolve if set successfully or throw an error if:
- The webpage is not installed as an app.
- The webpage is running in an insecure-context (HTTP).
- The browser does not support API.
- Permission was not granted (Safari).

#

```tsx
isAppBadgeSupported() => boolean
```
Queries if the app badge is supported.

This method will check that:
- The browser supports the badge API.
- The webpage is running over a secure-context (HTTPS).
- The webpage is running & installed as an app.

However this method does not check if the permission 
to display the badge was granted (Safari only).
In-order to do this call `isAppBadgeAllowed()`.

#

```tsx
isAppBadgeAllowed() => "denied" | "granted" | "unknown"
```
Queries if the app badge has been granted permission.
- If the app badge is not supported, `'denied'` is returned.
- If the webpage Chromium based, no permission is needed and `'granted'` is returned.
- Otherwise the browser requires permission and `'unknown'` is returned.
 
  In this case `requestAppBadgePermission()` should be called.
  Alternatively `navigator.permissions.query({ name: 'notifications' })` can be called
  if you only want to query the status without prompting but `requestAppBadgePermission()` does
  this prior to prompting.

#

```tsx
requestAppBadgePermission() => Promise<boolean>
```
Queries if the app badge needs permission or has been granted permission.

If permission is needed, it will prompt for the user to provide the permission.
- `false` is returned if the app badge is not supported or the method could not obtain permission.
  This can happen if the user denies the prompt or has it blocked.
- `true` is returned if the app badge does not require any permission 
   or if it succesfully obtained permission.
