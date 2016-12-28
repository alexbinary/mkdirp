# mkdirp

Simple mkdirp with promise support 🎉

## Install

This package is not hosted on the NPM registry.
You can install directly from GitHub using the npm or yarn client :

```bash
$ npm install alexbinary/mkdirp
# or
$ yarn add alexbinary/mkdirp
```

This will install the latest version from the `master` branch, which sould always be the latest stable version.

## Usage

```javascript
let mkdirp = require('alexbinary.mkdirp')

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

## Licence

MIT
