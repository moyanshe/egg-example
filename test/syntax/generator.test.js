'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/syntax/generator.test.js', () => {

  // Generator 函数是 ES6 提供的一种异步编程解决方案
  // 由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志
  // yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
  it('should generator.create', () => {
    function* g() {
      yield 'a';
      yield 'b';
      return 'c';
    }
    const generator = g();
    assert(generator.next().value === 'a');
    assert(generator.next().value === 'b');

    const last = generator.next();
    assert(last.value === 'c' && last.done === true);
  });

  // yield和return很像，只不过reutrn只能用一次，而yield可以不停的返回表达式
  it('should generator.lazyload', () => {
    function* sum(a, b) {
      return a + b;
    }
    const generator = sum(1, 2);
    assert(generator.next().value === 3);
  });

});
