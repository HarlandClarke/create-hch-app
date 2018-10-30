import {spawnSync} from 'child_process'
import {CLIError} from '../errors'

const base = (to) => {
  const install = spawnSync('npm i', ['-D', 'webpack css-loader vue vue-loader vue-template-compiler'], {
    stdio: 'inherit',
    shell: true,
    cwd: to
  })

  if (install.status > 0) {
    throw new CLIError(result, `Could not install base packages to project ${appName} using npm. Returned ${install.status}`)
  }

  return {result: 0}
}

const esInstall = (esObj, to) => {
  base(to)

  const install = spawnSync('npm i', ['-D', `@babel/core @babel/cli @babel/preset-${esObj.value}`], {
    stdio: 'inherit',
    shell: true,
    cwd: to
  })

  if (install.status > 0) {
    throw new CLIError(result, `Could not install ${esObj.name} to project ${appName} using npm. Returned ${install.status}`)
  }

  return {result: 0}
}

const es2015 = (to) => {
  const es = {
    name: 'ES6',
    value: 'es2015'
  }

  return esInstall(es, to)
}

const es2016 = (to) => {
  const es = {
    name: 'ES7',
    value: 'es2016'
  }

  return esInstall(es, to)
}
const es2017 = (to) => {
  const es = {
    name: 'ES8',
    value: 'es2017'
  }

  return esInstall(es, to)
}
const js = (to) => {
  const es = {
    name: 'the latest version of JS',
    value: 'env'
  }

  return esInstall(es, to)
}
const typescript = (to) => {
  const install = spawnSync('npm i', ['-D', 'typescript ts-loader'], {
    stdio: 'inherit',
    shell: true,
    cwd: to
  })

  if (install.status > 0) {
    throw new CLIError(result, `ould not install TypeScript to project ${appName} using npm. Returned ${install.status}`)
  }

  return {result: 0}
}

export default {
  es2015,
  es2016,
  es2017,
  js,
  typescript
}