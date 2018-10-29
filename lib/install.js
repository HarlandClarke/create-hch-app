const {spawnSync} = require('child_process')
const path = require('path')
const fs = require('fs')
const slug = require('slug')
const {CLIError} = require('./errors')
const {defaultJs} = require('../settings')

const tools = {
  bare(appName) {
    const parentDir = path.resolve(process.cwd(), '..')
    const appDir = parentDir + '/' + slug(appName, {lower: true})
    fs.mkdir(appDir, {recursive: true}, (err) => {
      if (err) throw err
    })
    const npmApp = spawnSync('npm', ['init'], {
      stdio: 'inherit',
      shell: true,
      cwd: appDir
    })

    if (npmApp.status > 0) {
      throw new CLIError(result, `Project ${appName} could not be created with npm. Returned ${npmApp.status}`)
    }

    return {result: 0, appDir}
  },
  nuxt(appName) {
    const parentDir = path.resolve(process.cwd(), '..')
    const nuxtApp = spawnSync('npx', ['create-nuxt-app', appName], {
      stdio: 'inherit',
      shell: true,
      cwd: parentDir
    })

    if (nuxtApp.status > 0) {
      throw new CLIError(result, `Project ${appName} could not be created with npx create-nuxt-app. Returned ${npmApp.status}`)
    }

    const appDir = parentDir + '/' + slug(appName, {lower: true})
    return {result: 0, appDir}
  }
}

const packages = {
  es2015(to) {
    const install = spawnSync('npm i', ['-D', 'typescript webpack ts-loader css-loader vue vue-loader vue-template-compiler'], {
      stdio: 'inherit',
      shell: true,
      cwd: to
    })

    if (install.status > 0) {
      throw new CLIError(result, `Project ${appName} could not be created with npm. Returned ${install.status}`)
    }

    return {result: 0}
  },
  es2016(to) {

  },
  es2017(to) {

  },
  typescript(to) {
    const install = spawnSync('npm i', ['-D', 'typescript webpack ts-loader css-loader vue vue-loader vue-template-compiler'], {
      stdio: 'inherit',
      shell: true,
      cwd: to
    })

    if (install.status > 0) {
      throw new CLIError(result, `Project ${appName} could not be created with npm. Returned ${install.status}`)
    }

    return {result: 0}
  }
}

packages.js = packages[defaultJs.value]

module.exports = {
  tools,
  packages
}