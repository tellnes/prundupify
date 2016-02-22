'use strict'

const browserify = require('browserify')
const prundupify = require('..')
const vm = require('vm')
const assert = require('assert')

const b1 = browserify('./entry', { standalone: 'S', basedir: __dirname })
b1.plugin(prundupify)
b1.bundle((err, bundle) => {
  if (err) throw err
  const context = {}
  vm.runInNewContext(bundle, context)
  assert(context.S.a === context.S.b)
})

const b2 = browserify('./entry', { standalone: 'S', basedir: __dirname })
b2.bundle((err, bundle) => {
  if (err) throw err
  const context = {}
  vm.runInNewContext(bundle, context)
  assert(context.S.a !== context.S.b)
})
