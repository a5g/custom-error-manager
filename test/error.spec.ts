import { expect } from 'chai'
import { assert } from 'chai'
import * as utils from '../utils'

const errorManager = utils.errorManager
const verify = utils.verify()

const finalCheck = () => {
  if (errorManager.getErrors().length > 0) {
    assert.fail(errorManager.getFormattedErrors())
  }
}

describe(`sample test to show error management`, () => {
  beforeEach(() => {
    errorManager.clearErrors()
  })

  beforeEach(() => {
    errorManager.clearErrors()
  })

  it(`login page check`, () => {
    verify.equals(true, false, 'Email text not present')
    verify.equals(true, false, 'Password text not present')
    verify.equals(true, false, 'Sign In button not present')

    finalCheck()
  })

  it(`home page check`, () => {
    verify.equals(true, false, 'Home icon not present')
    verify.equals(true, true, 'Welcome text not present')

    finalCheck()
  })

  it(`dashboard page check`, () => {
    verify.equals('dashboard', 'dashboard', 'Dashboard link is not present!')
    verify.equals('chart', 'chart', 'Chart not shown')

    finalCheck()
  })
})
