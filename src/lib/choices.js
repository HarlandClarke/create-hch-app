import {defaultJs} from '../settings.json'

const appName = {
  type: 'input',
  name: 'appName',
  message: 'What is the name of your app?',
  validate: (userInput, answersHash) => {
    if (userInput.length > 0) { // Why am I returning boolean for success, and String for failure?
      return true
    } else {
      return 'Your project name must be non-empty.'
    }
  }
}

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
    {
      name: `JS (Default: ${defaultJs.name})`,
      short: `Latest JavaScript (Defaults to ${defaultJs.name})`,
      value: defaultJs.value
    }
  ],
  default: defaultJs.value
}

const framework = {
  type: 'list',
  name: 'framework',
  message: 'Which framework will you use?',
  choices: [
    {name: 'Foundation', short: 'Foundation (Zurb)', value: 'foundation'},
    {name: 'Vuetify', short: 'VuetifyJS', value: 'vuetify'},
    {name: 'Quasar Framework (Coming soon!)', short: 'Quasar Framework', value: 'quasar'},
    {name: 'None', short: 'None', value: 'none'}
  ],
  default: 'foundation'
}

const http = {
  type: 'list',
  name: 'http',
  message: 'Which HTTP library will you use?',
  choices: [
    {name: 'Axios', short: 'Axios', value: 'axios'},
    {name: 'Superagent', short: 'Superagent', value: 'superagent'},
    {name: 'None', short: 'None', value: 'none'}
  ],
  default: 'axios'
}

const polyfill = {
  type: 'confirm',
  name: 'addPolyfill',
  message: 'Need to install babel-polyfill?',
  default: false
}

const eslint = {
  type: 'confirm',
  name: 'addEslint',
  message: 'Need to install eslint?',
  default: true
}


export default {
  appName,
  framework,
  language,
  useNuxt,
  http,
  polyfill,
  eslint
}