#!/usr/bin/env node

const {cli, install, output} = require('./lib')
const clear = require('clear')
const chalk = require('chalk')
const commandLineArgs = require('command-line-args')
const path = require('path')

const {optionDefinitions} = require('./options')

const run = async () => {
  // typical intro stuff
  output.intro()
  // parse command line args, then
  const options = commandLineArgs(optionDefinitions, {stopAtFirstUnknown: true})
  const argv = commandLineArgs._unknown || []

  // ask questions
  const answers = await cli.getQuestionsToPrompt(Object.keys(options))
  // install the files you need
  const choices = {...options, ...answers}

  clear()
  output.heading()
  output.cliLog('Ready to go! Installing your project...', 'blue', ['bold', 'underline'])

  try {
    let result
    if (choices.nuxt) {
      output.info('Installing Nuxt.js...', 'bold')
      result = install.tools.nuxt(options.appName)
    } else {
      output.warning('Not using Nuxt.js. Creating a generic project with npm init instead.', 'bold')
      result = install.tools.bare(options.appName)
    }

    output.error(result.appDir)
    output.info(`Installing ${choices.lang}...`, 'bold')
    switch (choices.lang) {
      case 'ts':
        install.packages.typescript(result.appDir)
        break
      case 'es2015':
        install.packages.es2015(result.appDir)
        break
      case 'es2016':
        install.packages.es2016(result.appDir)
        break
      default:
        install.packages.js(result.appDir)
    }

    switch (choices.framework) {
      case 'foundation':
        break
      case 'vuetify':
        break
      case 'quasar':
        break
      default:
        console.log('none')
    }
  } catch (e) {
    output.error(e.message)
    process.exit(e.code)
  }

  // be done
  output.success('All set!', 'bold')
}

run()
