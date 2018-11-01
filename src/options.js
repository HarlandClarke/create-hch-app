import {cli} from './lib/installers'
import {validHttpLibs, validFrameworks, validLangChoices} from './settings'

const optionDefinitions = [
  {
    name: 'appName',
    defaultOption: true
  },
  {
    name: 'description',
    alias: 'd',
    type: String
  },
  {
    name: 'author',
    alias: 'a',
    type: String
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
  },
  {
    name: 'http',
    alias: 'h',
    type: value => (validHttpLibs.find(value)) ? value : 'axios',
    multiple: false
    // defaultValue: 'axios'
  },
  {
    name: 'polyfill',
    alias: 'p',
    type: Boolean
    // defaultValue: false
  },
  {
    name: 'eslint',
    alias: 'e',
    type: Boolean
    // defaultValue: true
  }
]

export const options = {
  optionDefinitions
}