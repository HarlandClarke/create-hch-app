#!/usr/bin/env node

// import lib from './lib'
import { cli, installers, output } from './lib'
import clear from 'clear'
import commandLineArgs from 'command-line-args'
import { optionDefinitions } from './options'

const baseInstall = (appName, useNuxt) => {
  let result

  if (useNuxt) {
    result = installers.apps.nuxt(appName)
  } else {
    result = installers.apps.vue(appName)
  }

  return result
}
const frameworkInstall = (framework, to, tool) => {
  installers.frameworks[framework.toLowerCase()](to, tool)
}

const run = async () => {
  // typical intro stuff
  clear()
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
  output.success('Ready to go! Installing your project...\r\n')

  try {

    if (choices.nuxt) {
      output.info('Installing Nuxt.js...')
    } else {
      output.info('Creating a normal Vue project...')
    }

    let result = baseInstall(choices.appName, choices.nuxt)
    const tool = (choices.nuxt) ? 'nuxt' : 'vue'
    frameworkInstall(choices.framework, result.appDir, tool)
    installers.setup(result.appDir, choices)

    output.cliLog('')
    output.info('Installing packages...')
    installers.packages(result.appDir, choices.hide_opencollective)

    // Finish up
    clear()
    output.heading()
    output.success('All set!\r\n')
    output.finalize(choices.appName, result.appDir)
  } catch (e) {
    output.error(e.message)
    process.exit(e.code)
  }
}

run()