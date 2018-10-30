import {spawnSync} from 'child_process'
import {CLIError} from '../errors'


const npmInstall = (args, to) => {
  if (!Array.isArray(args)) {
    throw new CLIError(2, `Wrong type. args must be an Array.`)
  }

  const install = spawnSync('npm i', args, {
    stdio: 'inherit',
    shell: true,
    cwd: to
  })

  if (install.status > 0) {
    throw new CLIError(result, `Could not install packages to project ${appName} using npm. Returned ${install.status}`)
  }

  return {result: 0}
}

const eslint = (to) => {
  return npmInstall(['-D', 'eslint@4.x babel-eslint@8'], to)
}

const polyfill = (to) => {
  return npmInstall(['-S', '@babel/polyfill'], to)
}

const superagent = (to) => {
  return npmInstall(['-S', 'superagent'])
}

const axios = (to) => {
  return npmInstall(['-S', 'axios vue-axios'])
}

export default {
  eslint,
  polyfill,
  superagent,
  axios
}