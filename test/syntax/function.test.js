'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/syntax/function.test.js', () => {

  // ES6 允许使用“箭头”（=>）定义函数。
  it('should function.=>', () => {
    const f = v => v;
    const sum = (sum1, sum2) => sum1 + sum2;  // 如果函数体只有一行代码，则可以省略return 和 {}

    const mapSum = [ 1, 2, 3 ].map(x => x * x).reduce((x, y) => x + y);
    assert(f(1) === 1);
    assert(sum(1, 2) === 3);
    assert(mapSum === 14);
  });

  // ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
  it('should function.default params', () => {
    const log = (x, y = 'world') => `${x} ${y}`;
    assert(log('hello') === 'hello world');
  });

  // ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
  it('should function.rest', () => {
    const add = function(...values) {
      let sum = 0;
      for (const val of values) {
        sum += val;
      }
      return sum;
    }

    assert(add(1, 2, 3) === 6);
  });

  // 解构模式定义参数
  it('should function.rest', () => {
    const sum = function({ a, b = 5 }) {
      return a + b;
    }

    assert(sum({ a: 1 }) === 6);
  });

});
