import apps from './apps'
import frameworks from './frameworks'
import ejs from 'ejs'
import fs from 'fs-extra'
import CLIError from '../errors'
import {spawnSync} from 'child_process'
import io from '../io'

const setup = (setupDir, data) => {
  const oldPkg = `${setupDir}/_package.json`
  const newPkg = `${setupDir}/package.json`

  const oldGitignore = `${setupDir}/_gitignore`
  const newGitignore = `${setupDir}/.gitignore`

  const oldEslint = `${setupDir}/_.eslintrc.js`
  const newEslint = `${setupDir}/.eslintrc.js`

  try {
    fs.moveSync(oldPkg, newPkg)
    fs.moveSync(oldGitignore, newGitignore)
    fs.moveSync(oldEslint, newEslint)
    ejs.renderFile(newPkg, data, {async: false}, (err, str) => { io.rewriteFile(err, str, newPkg) })
    if (data.nuxt) {
      const oldNuxtConfig = `${setupDir}/_nuxt.config`
      const newNuxtConfig = `${setupDir}/nuxt.config.js`
      fs.moveSync(oldNuxtConfig, newNuxtConfig)
      ejs.renderFile(newNuxtConfig, data, {async: false}, (err, str) => { io.rewriteFile(err, str, newNuxtConfig) })
    }
  } catch (e) {
    throw e
  }
}

const packages = (to) => {
  const install = spawnSync('npm i', [], {
    stdio: 'inherit',
    shell: true,
    cwd: to
  })

  if (install.status > 0) {
    throw new CLIError(`Could not install base packages to project using npm. Returned ${install.status}`)
  }

  return {status: 0}
}

export default {
  apps,
  frameworks,
  packages,
  setup
}