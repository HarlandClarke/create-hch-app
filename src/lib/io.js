import fs from 'fs-extra'

const fileExists = (file) => {
  try {
    fs.accessSync(file, fs.constants.F_OK)
    return true
  } catch (e) {
    return false
  }
}

const rewriteFile = (err, str, file) => {
  if (err) throw err

  fs.writeFileSync(file, str)
}

const copyContents = (from, to) => {
  if (!fileExists(from)) {
    throw new Error(`${from} is not a valid file or directory.`)
  }
  fs.copySync(from, to)
}

export default {
  rewriteFile,
  copyContents
}