class ErrorManager {
  private errors: string[] = []

  constructor() {}

  getErrors() {
    return this.errors
  }

  addError(err: string) {
    this.errors.push(err)
  }

  clearErrors() {
    this.errors = []
  }

  getFormattedErrors() {
    let errs: string = '\n'

    this.errors.forEach((error) => {
      errs += `${error}\n`
    })

    return errs
  }
}

export default new ErrorManager()
