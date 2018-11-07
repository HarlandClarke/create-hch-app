import path from 'path'
import fs from 'fs'

const modules = {}

fs.readdirSync(__dirname).filter(f => f !== 'index.js').forEach(f => {
  const name = path.basename(path.join(__dirname, f), '.js')
  modules[name] = require(path.join('./', f))
})

export { modules as default }