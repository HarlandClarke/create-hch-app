#!/usr/bin/env node

import lib from './lib'
import {cli, installers, output} from './lib'
import clear from 'clear'
import commandLineArgs from 'command-line-args'
import path from 'path'
import fs from 'fs'

import {optionDefinitions} from './options'
import slug from "slug";

const baseInstall = (appName, useNuxt) => {
  let result

  if (useNuxt) {
    result = installers.apps.nuxt(appName)
  } else {
    result = installers.apps.bare(appName)
  }

  return result
}
const langInstall = (to, lang) => {
  switch (lang) {
    case 'ts':
      installers.packages.typescript(to)
      break
    case 'es2015':
      installers.packages.es2015(to)
      break
    case 'es2016':
      installers.packages.es2016(to)
      break
    default:
      installers.packages.js(to)
  }
}
const frameworkInstall = (to, framework) => {
  switch (framework) {
    case 'foundation':
      break
    case 'quasar':
      break
    default:
      console.log('vuetify')
  }
}
const httpLibInstall = (to, libName) => {
  switch (libName) {
    case 'superagent':
      installers.addons.superagent(to)
      break
    default:
      installers.addons.axios(to)
  }
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
      output.info('Not using Nuxt.js. Creating a generic project with npm init instead.', 'bold')
    }

    let result = baseInstall(choices.appName, choices.nuxt)

    output.info(`Installing ${choices.lang}...`, 'bold')
    langInstall(result.appDir, choices.lang)
    if (choices.framework !== 'none') {
      output.info(`Installing ${choices.framework}...`, 'bold')
      frameworkInstall(result.appDir, choices.framework)
    }

    if (choices.http !== 'none') {
      output.info(`Installing ${choices.http}...`, 'bold')
      httpLibInstall(result.appDir, choices.http)
    }

    if (choices.eslint) {
      output.info(`Installing ESLint...`, 'bold')
      installers.addons.eslint(result.appDir)
    }

    if (choices.polyfill) {
      output.info(`Installing babel-polyfill...`, 'bold')
      installers.addons.polyfill(result.appDir)
    }

    // Finish up
    output.success('All set!', 'bold')
    output.finalize(choices.appName, result.appDir)
  } catch (e) {
    const appDir = path.resolve(process.cwd(), '..') + '/' + slug(choices.appName, {lower: true})
    fs.access(appDir, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.rmdir(appDir, (err) => {
          output.error(`Could not remove ${appDir}.`)
        })
      }
    })
    output.error(e.message)
    process.exit(e.code)
  }
}

run()
