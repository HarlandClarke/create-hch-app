const cli = require('./cli')
const install = require('./install')
const message = require('./output')

module.exports = {
  cli,
  install,
  output: message
}
