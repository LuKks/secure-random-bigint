const test = require('brittle')
const randomBigInt = require('./index.js')

test('basic', function (t) {
  // Overusing the object
  const numbers = {
    1: 0,
    2: 0,
    3: 0
  }

  for (let i = 0; i < 10000; i++) {
    const n = randomBigInt(1n, 3n)

    if (n <= 0 || n >= 4n) {
      t.fail('Out of range: ' + n)
      return
    }

    numbers[n]++
  }

  t.ok(numbers[1] >= 3000)
  t.ok(numbers[2] >= 3000)
  t.ok(numbers[3] >= 3000)
})

test('big amount', function (t) {
  const min = 10000000000000000000000000000000000000000000000000n
  const max = 90000000000000000000000000000000000000000000000000n
  const n = randomBigInt(min, max)

  t.is(typeof n, 'bigint')
  t.ok(n >= min && n <= max, n)
})

test('non-BigInt range', function (t) {
  const n = randomBigInt(1, 3)

  t.is(typeof n, 'bigint')
  t.ok(n >= 1n && n <= 3n, n)
})

test('range with single outcome', function (t) {
  t.is(randomBigInt(-1n, -1n), -1n)
  t.is(randomBigInt(0n, 0n), 0n)
  t.is(randomBigInt(1n, 1n), 1n)
})
