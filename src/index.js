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

    if (choices.nuxt) {
      output.info('Installing Nuxt.js...', 'bold')
    } else {
      output.info('Creating a normal Vue project...', 'bold')
    }

    let result = baseInstall(choices.appName, choices.nuxt)
    const tool = (choices.nuxt) ? 'nuxt' : 'vue'
    frameworkInstall(choices.framework, result.appDir, tool)
    installers.setup(result.appDir, choices)

    output.info('Installing packages...', 'bold')
    installers.packages(result.appDir, choices.hide_opencollective)

    // Finish up
    output.success('All set!', 'bold')
    output.finalize(choices.appName, result.appDir)
  } catch (e) {
    output.error(e.message)
    process.exit(e.code)
  }
}

run()