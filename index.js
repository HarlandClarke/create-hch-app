#!/usr/bin/env node

const { cli, install } = require('./lib')
const clear = require('clear')
const chalk = require('chalk')
const commandLineArgs = require('command-line-args')
const figlet = require('figlet')
const validLangChoices = {
  ts: ['ts', 'typescript'],
  es2015: ['es2015', 'es6', 'ecmascript-2015'],
  es2016: ['es2016', 'es7', 'ecmascript-2016'],
  js: ['es2017', 'es8', 'ecmascript-2017', 'ecmascript', 'js']
}
const validFrameworks = [
  'foundation',
  'vuetify',
  'quasar',
  'none'
]
const optionDefinitions = [
  {
    name: 'nuxt',
    alias: 'n',
    type: Boolean
    //defaultValue: false
  },
  {
    name: 'lang',
    alias: 'l',
    type: language => cli.findChoiceInObject(validLangChoices, language),
    multiple: false
    // defaultValue: 'js'
  },
  {
    name: 'framework',
    alias: 'u',
    type: value => (validFrameworks.find(value)) ? value : 'quasar',
    multiple: false
    // defaultValue: 'quasar'
  }
]

const heading = () => {
  console.log(
    chalk.magenta(figlet.textSync('Bare Apper', { horizontalLayout: 'controlled smushing' }))
    + '\r\n'
  )
}

const run = async () => {
  // typical intro stuff
  cli.intro()
  // parse command line args, then
  const options = commandLineArgs(optionDefinitions)
  // ask questions
  const answers = await cli.getQuestionsToPrompt(Object.keys(options))
  // install the files you need
  const choices = {...options, ...answers}
  clear()
  heading()
  console.log(chalk.bold('Installing your project...'))
  // be done
  console.log(
    chalk.green.bold('All set!')
  )
}

run()
