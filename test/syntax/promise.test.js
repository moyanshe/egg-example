'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/syntax/promise.test.js', () => {

  // Promise里面的两个回调函数需要在then里面具体实现
  it('should promise.define', () => {
    const p = msg => {
      return new Promise((resolve, reject) => {
        if (msg === 'resolved') {
          resolve(msg);
        } else {
          reject(new Error(msg));
        }

      });
    }

    // 每次都返回以个Promise，形成一个链式操作
    p('resolved').then(v => { return new Promise((resolve, reject) => { return resolve(v); }); }).then(v => { assert(v === 'resolved'); }).catch(e => { console.log(e.message); });
    p('err').then(v => { console.log(v); }).catch(e => { assert(e.message === 'err'); });
  });

  // 通过promise实现延迟执行
  it('should promise.timeout', () => {
    function timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
      });
    }

    timeout(100).then(value => {
      console.log(value);
    });
  });

});
