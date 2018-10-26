const chalk = require('chalk')
const inquirer = require('inquirer')
const figlet = require('figlet')
const shell = require('shelljs')

const defaultJs = 'ES8'
const intro = () => {
  console.log(
    chalk.blue.bold('create-bare-vue-app') + '\r\n'
  )
}

const getQuestionsToPrompt = (currentOptions) => {
  let questions = []
  const hasOption = opt => (!!currentOptions.find(v => v === opt))
  if (!hasOption('nuxt')) {
    questions.push({
      type: 'confirm',
      name: 'nuxt',
      message: 'Are you using Nuxt.js?',
      default: false
    })
  }
  if (!hasOption('lang')) {
    questions.push({
      type: 'list',
      name: 'lang',
      message: 'Which scripting language are you going to use?',
      choices: [
        { name: 'TypeScript', value: 'ts' },
        { name: 'ES6', short: 'ECMAScript 2015', value: 'es2015' },
        { name: 'ES7', short: 'ECMAScript 2016', value: 'es2016' },
        { name: 'ES8', short: 'ECMAScript 2017', value: 'es2017' },
        { name: `JS (Default: ${defaultJs})`, short: `Latest JavaScript (Defaults to ${defaultJs})`, value: 'js' }
      ],
      default: 'js'
    })
  }
  if (!hasOption('framework')) {
    questions.push({
      type: 'list',
      name: 'framework',
      message: 'Which framework will you use?',
      choices: [
        { name: 'Foundation', short: 'Foundation (Zurb)', value: 'foundation' },
        { name: 'Vuetify', short: 'VuetifyJS', value: 'vuetify' },
        { name: 'Quasar Framework', short: 'Quasar Framework', value: 'quasar' },
        { name: 'None', short: 'None', value: 'none' }
      ],
      default: 'foundation'
    })
  }
  return inquirer.prompt(questions)
}

const findChoiceInObject = (obj, choice) => Object.keys(obj).find(
  k => (obj[k].find(elt => elt === choice)) ? k : null
)

module.exports = {
  intro,
  getQuestionsToPrompt,
  findChoiceInObject
}
