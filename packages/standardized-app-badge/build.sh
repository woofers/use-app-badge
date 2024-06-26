RUNDIR=$(basename $(dirname $(dirname $PWD)))
[[ $RUNDIR == "use-app-badge" ]] && ADDDIR="packages/use-app-badge" || ADDDIR=""
cat > "$ADDDIR/lib/cjs/index.js" <<- "EOF"
if (process.env.NODE_ENV !== 'development') {
  module.exports = require('./index.production.js')
} else {
  module.exports = require('./index.development.js')
}
EOF

cat > "$ADDDIR/lib/es/index.mjs" <<- "EOF"
import { 
  clearAppBadge as cab, 
  isAppBadgeAllowed as iaba, 
  isAppBadgeSupported as iabs, 
  requestAppBadgePermission as rabp, 
  setAppBadge as sab
} from './index.production.mjs'
import {
  clearAppBadge as cabDev, 
  isAppBadgeAllowed as iabaDev, 
  isAppBadgeSupported as iabsDev, 
  requestAppBadgePermission as rabpDev, 
  setAppBadge as sabDev
} from './index.development.mjs'

export const clearAppBadge = process.env.NODE_ENV !== 'development' ? cab : cabDev
export const isAppBadgeAllowed = process.env.NODE_ENV !== 'development' ? iaba : iabaDev
export const isAppBadgeSupported = process.env.NODE_ENV !== 'development' ? iabs : iabsDev
export const requestAppBadgePermission = process.env.NODE_ENV !== 'development' ? rabp : rabpDev
export const setAppBadge = process.env.NODE_ENV !== 'development' ? sab : sabDev
EOF


pnpm pkg set 'main'='./lib/cjs/index.js' -ws 
pnpm pkg set 'module'='./lib/es/index.mjs' -ws 
bun replace-exports.js '{".":{"types":"./lib/index.d.ts","import":"./lib/es/index.mjs","default":"./lib/cjs/index.js"}}' 