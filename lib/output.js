const chalk = require('chalk')
const figlet = require('figlet')

const _sendMessage = (message, color, styles, useBg = false) => {
  let writer
  if (useBg) {
    writer = chalk['bg' + color.toLowerCase().replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())]
  } else {
    writer = chalk[color]
  }
  if (Array.isArray(styles)) {
    styles.forEach(s => {
      writer = writer[s]
    })
  } else if (typeof styles === 'string' || styles instanceof String) {
    writer = writer[styles]
  } else {
    throw new Error('styles must be a String of one style or an Array of many.')
  }

  return writer(message)
}

const heading = () => {
  console.log(
    chalk.magenta(figlet.textSync('Vue Bare Apper', {horizontalLayout: 'controlled smushing'}))
    + '\r\n'
  )
}

const intro = () => {
  console.log(
    chalk.blue.bold('create-bare-vue-app') + '\r\n'
  )
}

const cliLog = (message, color = 'white', styles = []) => {
  console.log(_sendMessage(message, color, styles))
}

const error = (message, styles = []) => {
  console.log(_sendMessage(message, 'red', styles))
}

const info = (message, styles = []) => {
  console.log(_sendMessage(message, 'cyan', styles))
}

const success = (message, styles = []) => {
  console.log(_sendMessage(message, 'green', styles))
}

const warning = (message, styles = []) => {
  console.log(_sendMessage(message, 'yellow', styles))
}

module.exports = {
  heading,
  intro,
  cliLog,
  error,
  info,
  success,
  warning
}