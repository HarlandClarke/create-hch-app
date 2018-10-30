import {spawnSync} from 'child_process'
import path from 'path'
import fs from 'fs'
import slug from 'slug'
import {CLIError} from '../errors'

const bare = (appName) => {
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
}
const nuxt = (appName) => {
  const npmInit = bare(appName)

  if (npmInit.status > 0) {
    throw new CLIError(result, `Project ${appName} could not be created with npx create-nuxt-app. Returned ${npmInit.status}`)
  }

  const parentDir = path.resolve(process.cwd(), '..')

  const nuxt = spawnSync('npm', ['i', 'nuxt'], {
    stdio: 'inherit',
    shell: true,
    cwd: parentDir
  })

  fs.mkdir(npmInit.appDir + '/a')

  if (nuxt.status > 0) {
    throw new CLIError(result, `Project ${appName} could not be created with npx create-nuxt-app. Returned ${nuxt.status}`)
  }

  const appDir = parentDir + '/' + slug(appName, {lower: true})
  return {result: 0, appDir}
}

export default {
  bare,
  nuxt
}