import chalk from 'chalk'
import figlet from 'figlet'
import { projectName } from '../settings'

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
  const options = {horizontalLayout: 'controlled smushing'}
  console.log(chalk`{blue ${figlet.textSync(projectName, options)}}\r\n`)
}

const intro = () => {
  heading()
}

const cliLog = (message, color = 'white', styles = []) => {
  console.log(sendMessage(message, color, styles))
}

const error = (message) => {
  console.log(chalk`{white.bgRed.bold  ERROR } ${message}`)
}

const info = (message) => {
  console.log(chalk`{white.bgBlue.bold  INFO } ${message}`)
}

const success = (message) => {
  console.log(chalk`{white.bgGreen.bold  SUCCESS } ${message}`)
}

const warning = (message) => {
  console.log(chalk`{white.bgYellow.bold  WARNING } ${message}`)
}

const finalize = (app, projectDir, nuxt) => {
  info(`Your project ${app} has been installed to: ${projectDir}\r\n`)
  cliLog('To get started, run:\r\n')
  console.log(chalk`{blue.bold $} cd ${projectDir}`)
  if (nuxt) {
    console.log(chalk`{blue.bold $} npm run dev\r\n\r\n`)
  } else {
    console.log(chalk`{blue.bold $} npm run serve\r\n`)
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