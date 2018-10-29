const {cli} = require('./lib')
const {validFrameworks, validLangChoices} = require('./settings')

const optionDefinitions = [
  {
    name: 'appName',
    defaultOption: true
  },
  {
    name: 'nuxt',
    alias: 'n',
    type: Boolean
    // defaultValue: false
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

module.exports = {
  optionDefinitions
}