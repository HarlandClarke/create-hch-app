import chalk from 'chalk'
import figlet from 'figlet'

const sendMessage = (message, color, styles, useBg = false) => {
  let writer = chalk
  if (useBg) {
    writer = writer['bg' + color.toLowerCase().replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())]
  } else {
    writer = writer[color]
  }
  if (styles) {
    if (Array.isArray(styles)) {
      styles.forEach(s => {
        writer = writer[s]
      })
    } else if (typeof styles === 'string' || styles instanceof String) {
      writer = writer[styles]
    } else {
      throw new Error('styles must be a String of one style or an Array of many.')
    }
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
  console.log(sendMessage(message, color, styles))
}

const error = (message, styles = []) => {
  console.log(sendMessage(message, 'red', styles))
}

const info = (message, styles = []) => {
  console.log(sendMessage(message, 'cyan', styles))
}

const success = (message, styles = []) => {
  console.log(sendMessage(message, 'green', styles))
}

const warning = (message, styles = []) => {
  console.log(sendMessage(message, 'yellow', styles))
}

const finalize = (app, projectDir, nuxt) => {
  info(`Your project ${app} has been installed to: ${projectDir}\r\n`)
  cliLog('To get started, do:\r\n')
  console.log(chalk`\t{blue.bold $} cd ${projectDir}`)
  if (nuxt) {
    console.log(chalk`\t{blue.bold $} npm run dev\r\n\r\n`)
  } else {
    console.log(chalk`\t{blue.bold $} npm run serve\r\n\r\n`)
  }
}

export default {
  heading,
  intro,
  cliLog,
  error,
  info,
  success,
  warning,
  finalize
}