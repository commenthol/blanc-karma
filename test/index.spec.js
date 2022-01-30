// import { assert } from 'chai'
import assert from 'assert'
import * as index from '../src/index.js'

describe('#index', function () {
  it('can convert base64 string to bytes', function () {
    const arr = 'this is a string'.split('').map((c) => {
      return c.charCodeAt(0)
    })
    const res = index.base64ToBytes('dGhpcyBpcyBhIHN0cmluZw==')
    const exp = new Uint8Array(arr)

    assert.deepEqual(res, exp)
  })

  it('can convert a uint8 array to base64', function () {
    const arr = 'this is a string'.split('').map((c) => {
      return c.charCodeAt(0)
    })
    const ui8arr = new Uint8Array(arr)
    const res = index.bytesToBase64(ui8arr)
    const exp = 'dGhpcyBpcyBhIHN0cmluZw=='

    assert.deepEqual(res, exp)
  })

  it('can generate a random values string', function () {
    let res
    assert.doesNotThrow(function () {
      res = index.getRandomString()
    })
    console.log(res)
    assert.ok(res)
    assert.ok(res.length > 32)
  })
})
