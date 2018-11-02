import * as inquirer from 'inquirer'
import choice from './choices'
// import * as shell from 'shelljs'

const getQuestionsToPrompt = (currentOptions) => {
  let questions = []
  const hasOption = opt => (!!currentOptions.find(v => v === opt))
  if (!hasOption('appName')) {
    questions.push(choice.appName)
  }
  if (!hasOption('description')) {
    questions.push(choice.description)
  }
  if (!hasOption('author')) {
    questions.push(choice.author)
  }
  if (!hasOption('nuxt')) {
    questions.push(choice.useNuxt)
  }
  if (!hasOption('lang')) {
    questions.push(choice.language)
  }
  if (!hasOption('framework')) {
    questions.push(choice.framework)
  }
  if (!hasOption('polyfill')) {
    questions.push(choice.polyfill)
  }
  if (!hasOption('eslint')) {
    questions.push(choice.eslint)
  }
  if (!hasOption('http')) {
    questions.push(choice.http)
  }
  return inquirer.prompt(questions)
}

const findChoiceInObject = (obj, choice) => Object.keys(obj).find(
  k => (obj[k].find(elt => elt === choice)) ? k : null
)

export default {
  getQuestionsToPrompt,
  findChoiceInObject
}
