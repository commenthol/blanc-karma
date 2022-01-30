export function bytesToBase64 (uint8Array) {
  return window.btoa(String.fromCharCode.apply(null, uint8Array))
}

export function base64ToBytes (base64) {
  return new Uint8Array(window.atob(base64)
    .split('')
    .map(function (c) {
      return c.charCodeAt(0)
    })
  )
}

export function getRandomString (length) {
  length = length || 32
  const u8arr = new Uint8Array(length)

  crypto.getRandomValues(u8arr)

  return bytesToBase64(u8arr)
}
