#!/usr/bin/env bash
RUNDIR=$(basename $(dirname $(dirname $PWD)))
if [[ "$RUNDIR" == "use-app-badge" ]]; then
  ADDDIR=""
else
  ADDDIR="packages/use-app-badge" 
fi

cat > "${ADDDIR}lib/cjs/index.js" <<- "EOF"
if (process.env.NODE_ENV !== 'development') {
  module.exports = require('./index.production.js')
} else {
  module.exports = require('./index.development.js')
}
EOF

cat > "${ADDDIR}lib/es/index.mjs" <<- "EOF"
import { useAppBadge as uab, AppBadge as ab } from './index.production.mjs'
import { useAppBadge as uabDev, AppBadge as abDev } from './index.development.mjs'

export const useAppBadge = process.env.NODE_ENV !== 'development' ? uab : uabDev
export const AppBadge = process.env.NODE_ENV !== 'development' ? ab : abDev
EOF


node replace-exports.js main './lib/cjs/index.js'
node replace-exports.js module './lib/es/index.mjs'
node replace-exports.js exports '{".":{"types":"./lib/index.d.ts","import":"./lib/es/index.mjs","default":"./lib/cjs/index.js"}}' 

