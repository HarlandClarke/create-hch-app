import { spawnSync } from 'child_process'
import CLIError from '../errors'
import io from '../io'
import path from 'path'

const copyFrameworkToProject = (framework, to, tool) => {
  try {
    const from = path.resolve(__dirname + `../../../templates/frameworks/${tool}/${framework}`)
    io.copyContents(from, to)
  } catch (e) {
    throw new CLIError(1, e)
  }
}

const bootstrap = (to, tool) => {
  copyFrameworkToProject('bootstrap', to, tool)
}

const foundation = (to, tool) => {
  copyFrameworkToProject('foundation', to, tool)
}

const vuetify = (to, tool) => {
  copyFrameworkToProject('vuetify', to, tool)
}

const quasar = (to, tool) => {
  // Coming soon
  // copyFrameworkToProject('quasar', to)
}

export default {
  bootstrap,
  foundation,
  vuetify,
  quasar
}