
const pkg = require('./package.json')
const fs = require('fs')

const key = process.argv[2]
const obj = process.argv[3]
pkg[key] = obj.includes('{') ? JSON.parse(obj) : obj
fs.writeFile('./package.json', JSON.stringify(pkg, null, 2), () => {
  console.log('{}')
})