'use strict';

const Controller = require('egg').Controller;

class PromiseController extends Controller {
  async bubbleCatch() {
    const { ctx } = this;
    const msg = ctx.params.msg;
    const promise = new Promise((resolve, reject) => {
      if (msg === 'ok') {
        return resolve('msg is ok');
      }

      return reject(new Error('msg is not ok'));
    });

    promise.then(r => {
      ctx.body = r;
    }).catch(e => {  //连续抛，连续捕获
      throw e;
      // ctx.body = e.message;
    }).catch(e => {
      ctx.body = e.message;
    }).finally(() => {      //总是执行

      // map方法
      const list = [ 2, 3, 4, 5, 6 ].map(id => {
        return 'user:' + id;
      });

      // for循环的几种方式
      list.forEach(v => {
        console.log(v);
      });

      for (const item of list) {
        console.log(item);
      }

      for (const k in list) {
        console.log(`${k}:${list[k]}`);
      }


    });
  }

}

module.exports = PromiseController;
