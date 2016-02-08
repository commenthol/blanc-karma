/* eslint
   no-console: 0
*/

/* globals describe, it */

'use strict'

const assert = require('assert')
const index = require('..')

describe('#index', function () {
  it('can convert base64 string to bytes', function () {
    var arr = 'this is a string'.split('').map((c) => {
      return c.charCodeAt(0)
    })
    var res = index.base64ToBytes('dGhpcyBpcyBhIHN0cmluZw==')
    var exp = new Uint8Array(arr)

    assert.deepEqual(res, exp)
  })

  it('can convert a uint8 array to base64', function () {
    var arr = 'this is a string'.split('').map((c) => {
      return c.charCodeAt(0)
    })
    var ui8arr = new Uint8Array(arr)
    var res = index.bytesToBase64(ui8arr)
    var exp = 'dGhpcyBpcyBhIHN0cmluZw=='

    assert.deepEqual(res, exp)
  })

  it('can generate a random values string', function () {
    var res
    assert.doesNotThrow(function () {
      res = index.getRandomString()
    })
    console.log(res)
    assert.ok(res)
    assert.ok(res.length > 32)
  })
})
