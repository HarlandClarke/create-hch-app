import {spawnSync} from 'child_process'
import CLIError from '../errors'
import io from '../io'
import path from 'path'

const copyFrameworkToProject = (framework, to) => {
  try {
    const from = path.resolve(__dirname + `../../../templates/frameworks/${framework}`)
    io.copyContents(from, to)
  } catch (e) {
    throw new CLIError(1, e)
  }
}

const bootstrap = (to) => {
  copyFrameworkToProject('bootstrap', to)
}

const foundation = (to) => {
  copyFrameworkToProject('foundation', to)
}

const vuetify = (to) => {
  copyFrameworkToProject('vuetify', to)
}

const quasar = (to) => {
  // Coming soon
  // copyFrameworkToProject('quasar', to)
}

export default {
  bootstrap,
  foundation,
  vuetify,
  quasar
}