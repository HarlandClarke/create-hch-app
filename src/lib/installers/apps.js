import {spawnSync} from 'child_process'
import path from 'path'
import fs from 'fs-extra'
import CLIError from '../errors'
import io from '../io'

const bare = (appName) => {
  const parentDir = process.cwd()
  const appDir = parentDir + '/' + appName

  fs.mkdirSync(appDir, {recursive: true}, (err) => {
    if (err) throw err
  })

  return {status: 0, appDir}

}

const vue = (appName) => {
  try {
    const result = bare(appName)
    const tplDir = path.resolve(__dirname + '../../../templates/vue/')
    io.copyContents(tplDir, result.appDir)
    return result
  } catch (e) {
    throw new CLIError(1, `Project ${appName} could not be created. Returned ${e}`)
  }
}

const nuxt = (appName) => {
  try {
    const result = bare(appName)

    const tplDir = path.resolve(__dirname + '../../../templates/nuxt/')
    io.copyContents(tplDir, result.appDir)
    return result
  } catch (e) {
    throw new CLIError(1, `Project ${appName} could not be created. Returned ${e}`)
  }
}

export default {
  vue,
  nuxt
}