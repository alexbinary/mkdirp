
let mkdirp = require('mkdirp')
let promisify = require('@alexbinary/promisify')

let mymkdirp = promisify(mkdirp)
mymkdirp.sync = mkdirp.sync

module.exports = mymkdirp
