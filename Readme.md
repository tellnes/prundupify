# prundupify

[![Version npm](https://img.shields.io/npm/v/prundupify.svg?style=flat-square)](https://www.npmjs.com/package/prundupify)[![npm Downloads](https://img.shields.io/npm/dm/prundupify.svg?style=flat-square)](https://www.npmjs.com/package/prundupify)[![Build Status](https://img.shields.io/travis/tellnes/prundupify/master.svg?style=flat-square)](https://travis-ci.org/tellnes/prundupify)[![Coverage Status](https://img.shields.io/coveralls/tellnes/prundupify/master.svg?style=flat-square)](https://coveralls.io/github/tellnes/prundupify?branch=master)[![Dependencies](https://img.shields.io/david/tellnes/prundupify.svg?style=flat-square)](https://david-dm.org/tellnes/prundupify)[![Tips](http://img.shields.io/gratipay/tellnes.png?style=flat-square)](https://gratipay.com/~tellnes/)


`prundupify` is a [browserify](http://browserify.org/) plugin which removes
duplicate files in the build completly.

Warning: This might break your code if you are relying on the module cache to
be different for different files which has exatcly the same source. Please see
the example below.


## Example

a.js:
```js
module.exports = Math.random()
```

b.js:
```js
module.exports = Math.random()
```

entry.js:
```js
console.log(require('./a') === require('./b'))
```

```bash
$ browserify entry.js | node
false
$ browserify entry.js -p prundupify | node
true
```


## Install

```bash
npm install -S prundupify
```


## License

MIT
