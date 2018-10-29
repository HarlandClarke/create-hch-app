const {defaultJs} = require('../settings')

const useNuxt = {
  type: 'confirm',
  name: 'nuxt',
  message: 'Are you using Nuxt.js?',
  default: false
}

const language = {
  type: 'list',
  name: 'lang',
  message: 'Which scripting language are you going to use?',
  choices: [
    {name: 'TypeScript', value: 'ts'},
    {name: 'ES6', short: 'ECMAScript 2015', value: 'es2015'},
    {name: 'ES7', short: 'ECMAScript 2016', value: 'es2016'},
    {name: 'ES8', short: 'ECMAScript 2017', value: 'es2017'},
    {name: `JS (Default: ${defaultJs.name})`, short: `Latest JavaScript (Defaults to ${defaultJs.name})`, value: 'js'}
  ],
  default: 'js'
}

const framework = {
  type: 'list',
  name: 'framework',
  message: 'Which framework will you use?',
  choices: [
    {name: 'Foundation', short: 'Foundation (Zurb)', value: 'foundation'},
    {name: 'Vuetify', short: 'VuetifyJS', value: 'vuetify'},
    {name: 'Quasar Framework', short: 'Quasar Framework', value: 'quasar'},
    {name: 'None', short: 'None', value: 'none'}
  ],
  default: 'foundation'
}

module.exports = {
  framework,
  language,
  useNuxt
}