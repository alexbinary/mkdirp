# mkdirp

Simple mkdirp with promise support 🎉

[![npm](https://img.shields.io/npm/v/@alexbinary/mkdirp.svg)](https://www.npmjs.com/package/@alexbinary/mkdirp)
[![GitHub release](https://img.shields.io/github/release/alexbinary/mkdirp.svg?label="github")](https://github.com/alexbinary/mkdirp/releases/latest)
[![Build Status](https://travis-ci.org/alexbinary/mkdirp.svg)](https://travis-ci.org/alexbinary/mkdirp)
[![dependencies Status](https://david-dm.org/alexbinary/mkdirp/status.svg)](https://david-dm.org/alexbinary/mkdirp)
[![devDependencies Status](https://david-dm.org/alexbinary/mkdirp/dev-status.svg)](https://david-dm.org/alexbinary/mkdirp?type=dev)

Based on [mkdirp](https://www.npmjs.com/package/mkdirp) by [substack](https://www.npmjs.com/~substack)

Uses [@alexbinary/promisify](https://www.npmjs.com/package/@alexbinary/promisify) by [alexbinary](https://www.npmjs.com/~alexbinary)

## Install

Install using npm or yarn :

```bash
$ npm install @alexbinary/mkdirp
# or
$ yarn add @alexbinary/mkdirp
```

## Usage

```javascript
let mkdirp = require('@alexbinary/mkdirp')

// promise
mkdirp('/foo/bar').then(() => {
  console.log('dir created')
})

// callback
mkdirp('/foo/bar', (err) => {
  if (!err) {
    console.log('dir created')
  }
})

// sync
mkdirp.sync('/foo/bar')
console.log('dir created')
```

## Documentation

```javascript
let mkdirp = require('@alexbinary/mkdirp')
```

### mkdirp(dirpath[, callback])

Creates an empty directory at `dirpath`.
Creates intermediary directories if necessary.

`callback` is an optional node style callback with no arguments except for a possible error.  
Always returns a Promise which resolves with no arguments.

### mkdirp.sync(dirpath)

Synchronous version.

## Licence

MIT
