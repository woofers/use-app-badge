#!/usr/bin/env bash
node replace-exports.js main './lib/cjs/index.production.js' 
node replace-exports.js module './lib/es/index.production.mjs'
node replace-exports.js exports '{".":{"development":{"types":"./lib/index.d.ts","import":"./lib/es/index.development.mjs","default":"./lib/cjs/index.development.js"},"production":{"types":"./lib/index.d.ts","import":"./lib/es/index.production.mjs","default":"./lib/cjs/index.production.js"}}}'