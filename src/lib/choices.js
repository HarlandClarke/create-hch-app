import slug from 'slug'
import { defaultJs } from '../settings.json'

const appName = {
  type: 'input',
  name: 'appName',
  message: 'What is the name of your app?',
  filter: (userInput) => {
    return new Promise((resolve, reject) => {
      if (slug) {
        resolve(slug(userInput, {lower: true}))
      } else {
        reject(`Can't slugify ${userInput}. Library not found.`)
      }
    })
  },
  validate: (userInput, answersHash) => {
    if (userInput.length > 0) { // Why am I returning boolean for success, and String for failure?
      return true
    } else {
      return 'Your project name must be non-empty.'
    }
  }
}

const description = {
  type: 'input',
  name: 'description',
  message: 'A description of your app:'
}

const author = {
  type: 'input',
  name: 'author',
  message: 'Author:'
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

const css = {
  type: 'list',
  name: 'css',
  message: 'Which CSS preprocessor will you use?',
  choices: [
    {name: 'SCSS', short: 'SCSS', value: 'scss'},
    {name: 'LESS', short: 'LESS', value: 'less'},
    {name: 'Stylus', short: 'Stylus', value: 'stylus'}
  ]
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
  name: 'polyfill',
  message: 'Need to install babel-polyfill?',
  default: false
}

const eslint = {
  type: 'confirm',
  name: 'eslint',
  message: 'Need to install eslint?',
  default: true
}

const standard_version = {
  type: 'confirm',
  name: 'standard_version',
  message: 'Use standard-version for versioning?',
  default: true
}

const validator = {
  type: 'list',
  name: 'validator',
  message: 'Which validator will you use?',
  choices: [
    {name: 'Vuelidate', short: 'Vuelidate', value: 'vuelidate'},
    {name: 'None', short: 'None', value: 'none'}
  ],
  default: 'vuelidate'
}


export default {
  appName,
  description,
  author,
  framework,
  language,
  useNuxt,
  http,
  css,
  polyfill,
  eslint,
  standard_version,
  validator
}