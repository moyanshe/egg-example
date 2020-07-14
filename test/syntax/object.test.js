'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/syntax/object.test.js', () => {

  it('should object.property', () => {
    const name = '张三';
    const age = 23;

    const user = { name, age }; // 等同于{name: name, age: age}
    const o = {
      name, // 等同于name: name
      say() {
        return `hello ${this.name}`;
      }
    };
    assert(o.say() === 'hello 张三');
    assert(o.name === '张三');
    assert(user.age === 23);
  });

  it('should object.merge', () => {
    const a = { name: 'zhangsan' };
    const b = { age: 23 };
    const user = Object.assign(a, b);

    const name = 'lisi';
    Object.assign(user, { name }); // lisi覆盖了zhangsan
    assert(user.name === 'lisi' && user.age === 23);
  });

});
