import { cli } from './lib/installers'
import { validCssPreprocessors, validFrameworks, validHttpLibs, validLangChoices, validValidators } from './settings'

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
    type: value => (validFrameworks.find(value.toLowerCase())) ? value : '',
    multiple: false
    // defaultValue: 'quasar'
  },
  {
    name: 'http',
    alias: 'h',
    type: value => (validHttpLibs.find(value.toLowerCase())) ? value : '',
    multiple: false
    // defaultValue: 'axios'
  },
  {
    name: 'css',
    alias: 'c',
    type: value => (validCssPreprocessors.find(value.toLowerCase())) ? value : '',
    multiple: false
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
  },
  {
    name: 'validator',
    type: value => (validValidators.find(value.toLowerCase())) ? value : '',
    multiple: false
  },
  {
    name: 'use_standard_version',
    type: Boolean
  },
  {
    name: 'hide_opencollective',
    type: Boolean,
    defaultValue: false
  }
]

export const options = {
  optionDefinitions
}