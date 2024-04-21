
const package = require('./package.json')
const fs = require('fs')

const obj = process.argv[2]
package.exports = JSON.parse(obj)
fs.writeFile('./package.json', JSON.stringify(package, null, 2), () => {
  console.log('{}')
})