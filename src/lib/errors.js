class CLIError extends Error {
  constructor(code, ...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CLIError)
    }

    this.code = code
    this.date = new Date() // If we want it...
  }
}

export default CLIError