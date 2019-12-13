// const expect = require('expect')
const request = require('supertest')
const { app } = require('./../server')

describe('GET /', () => {
  it('should return a HTTP 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done)
  })
})
