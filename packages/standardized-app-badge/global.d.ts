declare global {
  module globalThis {
    var process: { env: { NODE_ENV: string } }
  }
}
  
export {}