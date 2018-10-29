class CLIError extends Error {
  constructor(code = 1, ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CLIError)
    }

    this.code = code
    this.date = new Date() // If we want it...
  }
}

module.exports = {
  CLIError
}