'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/syntax/string.test.js', () => {

  it('should string.template', () => {
    const str = 'world';
    const templateStr = `hello ${str}`;
    assert(templateStr === 'hello world');
  });

  it('should string.trim', () => {
    const templateStr = ' hello world ';
    assert(templateStr.trimLeft() === 'hello world ');
    assert(templateStr.trimRight() === ' hello world');
    assert(templateStr.trim() === 'hello world');
  });

  // 传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新的实例方法,includes(), startsWith(), endsWith()
  it('should string.search', () => {
    const str = 'hello world';
    assert(str.startsWith('hello') === true);
    assert(str.endsWith('world') === true);
    assert(str.includes('o w') === true);
  });

  // repeat方法返回一个新字符串，表示将原字符串重复n次。
  it('should string.repeat', () => {
    const str = 'x';
    assert(str.repeat(1) === 'x');
    assert(str.repeat(3) === 'xxx');
    assert(str.repeat(0) === '');
  });

  // ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
  it('should string.pad', () => {
    const str = 'x';
    assert(str.padStart(4, 'ab') === 'abax');
    assert(str.padEnd(5, 'ab') === 'xabab');
  });

});
