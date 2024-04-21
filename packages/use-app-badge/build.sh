cat > lib/cjs/index.js <<- "EOF"
if (process.env.NODE_ENV !== 'development') {
  module.exports = require('./indev.production.js')
} else {
  module.exports = require('./indev.development.js')
}
EOF

cat > lib/es/index.mjs <<- "EOF"
import { useAppBadge as uab, AppBadge as ab } from './indev.production.mjs'
import { useAppBadge as uabDev, AppBadge as abDev } from './indev.development.mjs'

export const useAppBadge = process.env.NODE_ENV !== 'development' ? uab : uabDev
export const AppBadge = process.env.NODE_ENV !== 'development' ? ab : abDev
EOF


pnpm pkg set 'main'='./lib/cjs/index.js' -ws 
pnpm pkg set 'module'='./lib/es/index.mjs' -ws 
bun replace-exports.js '{".":{"types":"./lib/index.d.ts","import":"./lib/es/index.mjs","default":"./lib/cjs/index.js"}}' 

