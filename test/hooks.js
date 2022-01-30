import dom from 'jsdom-global'
import crypto from 'crypto'

let cleanup

export const mochaHooks = {
  beforeAll () {
    cleanup = dom()
    globalThis.crypto = window.crypto = crypto.webcrypto
  },
  afterAll () {
    cleanup()
  }
}
