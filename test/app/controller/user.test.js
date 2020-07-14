'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('should assert', async () => {
    const ctx = app.mockContext({});
    const userInfo = await ctx.service.user.find(1);
    assert(userInfo.id === 1);
  });

  it('should GET /user/1', () => {
    return app.httpRequest()
      .get('/user/1')
      .expect('user:1')
      .expect(200);
  });
});
