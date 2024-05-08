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
import { useAppBadge as uab, AppBadge as ab } from './index.production.mjs'
import { useAppBadge as uabDev, AppBadge as abDev } from './index.development.mjs'

export const useAppBadge = process.env.NODE_ENV !== 'development' ? uab : uabDev
export const AppBadge = process.env.NODE_ENV !== 'development' ? ab : abDev
EOF


pnpm pkg set 'main'='./lib/cjs/index.js' -ws 
pnpm pkg set 'module'='./lib/es/index.mjs' -ws 
bun replace-exports.js '{".":{"types":"./lib/index.d.ts","import":"./lib/es/index.mjs","default":"./lib/cjs/index.js"}}' 

