const crypto = require('crypto')

module.exports = function secureRandomBigInt (min, max) {
  const minimum = BigInt(min)
  const maximum = BigInt(max)

  return minimum + secureRandomUniform(1n + (maximum - minimum))
}

// Based on secure-random-uniform/bigint.js
function secureRandomUniform (limit) {
  if (limit <= 0n) throw new Error('Limit must be larger than 0')

  let width = 0n

  for (let n = limit; n > 0n; width++) {
    n >>= 64n
  }

  const max = (1n << (width * 64n))
  const buf = new BigUint64Array(Number(width))
  const min = max - (max % limit)

  let sample = 0n

  do {
    crypto.randomFillSync(buf)
    sample = buf.reduce((s, n) => s << 64n | n, 0n)
  } while (sample >= min)

  return sample % limit
}
