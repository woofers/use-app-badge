export const buildSeverSideRenderError = (func: string) => () =>
  Promise.reject<void>(new Error(`'${func}' can not be called on server`))

export const buildPermissionAllowedError = () =>
  new Error("'isAllowed()' was called before 'requestPermission()'")
