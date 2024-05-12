# secure-random-bigint

Generate a random BigInt within a range

```
npm i secure-random-bigint
```

Based on [secure-random-uniform/bigint.js](https://github.com/emilbayes/secure-random-uniform).

## Usage

```js
const randomBigInt = require('secure-random-bigint')

const min = 1n
const max = 90000000000000000000000000000000000000000000000000n
const num = randomBigInt(min, max)
// => 3377836017337791808106320086972099289841401582994
```

## License

ISC
