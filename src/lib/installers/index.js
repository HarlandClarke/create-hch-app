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

  try {
    fs.moveSync(oldPkg, newPkg)
    ejs.renderFile(newPkg, data, {async: false}, (err, str) => { io.rewriteFile(err, str, newPkg) })
    if (data.nuxt) {
      const nuxtConfig = `${setupDir}/nuxt.config.js`
      ejs.renderFile(nuxtConfig, data, {async: true}, (err, str) => { io.rewriteFile(err, str, nuxtConfig) })
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