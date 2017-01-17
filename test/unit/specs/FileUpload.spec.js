/* eslint-disable */
let Vue = require('vue')
/* eslint-enable */
let FileUpload = require('../../../src/FileUpload.vue')

describe('FileUpload.vue', () => {
  it('data should return a function', () => {
    expect(typeof FileUpload.data).toBe('function')
  })

  it('sets the correct default data', () => {
    const defaultData = FileUpload.data()
    expect(defaultData.file).toBe(null)
  })

  it('emitter has should be a function', () => {
    expect(typeof FileUpload.methods.emitter).toBe('function')
  })

  it('uploadProgress has to be a function', () => {
    expect(typeof FileUpload.methods.uploadProgress).toBe('function')
  })

  it('onFileChange has to be a function', () => {
    expect(typeof FileUpload.methods.onFileChange).toBe('function')
  })
})
