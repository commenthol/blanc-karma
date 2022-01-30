/**
 * @param {Uint8Array} uint8Array
 * @returns {string}
 */
export function bytesToBase64 (uint8Array) {
  // @ts-ignore
  return window.btoa(String.fromCharCode.apply(null, uint8Array))
}

/**
 * @param {string} base64
 * @returns {Uint8Array}
 */
export function base64ToBytes (base64) {
  return new Uint8Array(window.atob(base64)
    .split('')
    .map(function (c) {
      return c.charCodeAt(0)
    })
  )
}

/**
 * @param {number} length
 * @returns {string}
 */
export function getRandomString (length) {
  length = length || 32
  const u8arr = new Uint8Array(length)

  crypto.getRandomValues(u8arr)

  return bytesToBase64(u8arr)
}
