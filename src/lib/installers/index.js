import apps from './apps'
import frameworks from './frameworks'
import ejs from 'ejs'
import fs from 'fs-extra'
import CLIError from '../errors'
import { spawnSync } from 'child_process'
import io from '../io'

const setup = (setupDir, data) => {
  const oldPkg = `${setupDir}/_package.json`
  const newPkg = `${setupDir}/package.json`

  const oldBabelConf = `${setupDir}/_babel.config.js`
  const newBabelConf = `${setupDir}/babel.config.js`

  const oldGitignore = `${setupDir}/_gitignore`
  const newGitignore = `${setupDir}/.gitignore`

  try {
    fs.moveSync(oldPkg, newPkg)
    fs.moveSync(oldGitignore, newGitignore)
    fs.moveSync(oldBabelConf, newBabelConf)
    ejs.renderFile(newPkg, data, {async: false}, (err, str) => { io.rewriteFile(err, str, newPkg) })
    ejs.renderFile(newBabelConf, data, {async: false}, (err, str) => { io.rewriteFile(err, str, newBabelConf)})

    if (data.nuxt) {
      const oldNuxtConfig = `${setupDir}/_nuxt.config`
      const newNuxtConfig = `${setupDir}/nuxt.config.js`
      fs.moveSync(oldNuxtConfig, newNuxtConfig)
      ejs.renderFile(newNuxtConfig, data, {async: false}, (err, str) => { io.rewriteFile(err, str, newNuxtConfig) })
    } else {
      const oldMainJs = `${setupDir}/src/_main.js`
      const newMainJs = `${setupDir}/src/main.js`
      fs.moveSync(oldMainJs, newMainJs)
      ejs.renderFile(newMainJs, data, {async: false}, (err, str) => { io.rewriteFile(err, str, newMainJs)})
    }
  } catch (e) {
    throw e
  }
}

const packages = (to, hideOpenCollective = false) => {
  const installPrefix = (hideOpenCollective) ? 'OPENCOLLECTIVE_HIDE=1 ' : ''
  const install = spawnSync(`${installPrefix}npm i`, [], {
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