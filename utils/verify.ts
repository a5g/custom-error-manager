import { expect } from 'chai'
import errorManager from './error-manager'

class Verify {
  constructor() {}

  equals(expected, actual, msg = '') {
    try {
      expect(expected).to.eq(actual, msg)
    } catch (err) {
      errorManager.addError(
        `Error ${errorManager.getErrors().length + 1}: ${msg}`,
      )
    }
  }
}

export default Verify
