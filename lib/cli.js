const inquirer = require('inquirer')
const choice = require('./choices')
// const shell = require('shelljs')

const getQuestionsToPrompt = (currentOptions) => {
  let questions = []
  const hasOption = opt => (!!currentOptions.find(v => v === opt))
  if (!hasOption('nuxt')) {
    questions.push(choice.useNuxt)
  }
  if (!hasOption('lang')) {
    questions.push(choice.language)
  }
  if (!hasOption('framework')) {
    questions.push(choice.framework)
  }
  return inquirer.prompt(questions)
}

const findChoiceInObject = (obj, choice) => Object.keys(obj).find(
  k => (obj[k].find(elt => elt === choice)) ? k : null
)

module.exports = {
  getQuestionsToPrompt,
  findChoiceInObject
}
