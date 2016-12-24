
let chai = require('chai')
let expect = chai.expect
chai.use(require('chai-fs'))

let fsSandbox = require('alexbinary.fs-sandbox')

let mkdirp = require('./../src/index')

fsSandbox.setRoot(__dirname)

describe('mkdirp', function () {
  it('promise', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let filepath = sandbox.getPath('foo/bar')
    // ## TEST
    mkdirp(filepath).then(() => {
      // ## Assert
      expect(filepath).to.be.a.directory()
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
    }).then(() => done()).catch(done)
  })
  it('callback', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let filepath = sandbox.getPath('foo/bar')
    // ## TEST
    mkdirp(filepath, (err) => {
      // ## Assert
      expect(err).to.be.null
      expect(filepath).to.be.a.directory()
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
      done()
    })
  })
  it('sync', function () {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let filepath = sandbox.getPath('foo/bar')
    // ## TEST
    mkdirp.sync(filepath)
    // ## Assert
    expect(filepath).to.be.a.directory()
    // ## Teardown
    fsSandbox.rmSync()
    // ## End
  })
  after(function () {
    fsSandbox.rmSync()
  })
})
