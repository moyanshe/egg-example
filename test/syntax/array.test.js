'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/syntax/array.test.js', () => {

  // ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象 
  // 可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。 
  it('should array.keys/values/entries', () => {
    const list = [ 'a', 'b', 'c' ];
    const keys = list.keys();
    const values = list.values();
    const entries = list.entries();

    for (const index in list) {
      console.log(index, list[index]);
    }

    for (const i of list) {
      console.log(i);
    }

    list.forEach((elem, index) => {
      console.log(index, elem);
    });

    assert(keys.next().value === 0);
    assert(values.next().value === 'a');
    assert(entries.next().value.join('') === '0a');
  });

  it('should array.map', () => {
    const list = [ 1, 2 ].map(v => {
      return `v:${v}`;
    });
    const listStr = list.join(',');
    assert(listStr === 'v:1,v:2');
  });

  it('should array.filter', () => {
    const list = [ 'a', 'b' ].filter(v => {
      return v === 'a';
    });

    const list2 = [ 'a' ];
    assert(list.toString === list2.toString);
  });

  it('should array.reduce', () => {
    const sum = [ 1, 2, 3 ].reduce((x, y) => {
      return x + y;
    });

    assert(sum === 6);
  });

  // 稳定排序
  it('should array.stableSort', () => {
    const arr = [
      'peach',
      'straw',
      'apple',
      'spork',
    ];

    const stableSorting = (s1, s2) => {
      if (s1[0] < s2[0]) return -1;
      return 1;
    };

    const sortedList = arr.sort(stableSorting);
    assert(sortedList.join(',') === 'apple,peach,straw,spork');
  });

  // 不稳定排序
  it('should array.unstableSort', () => {
    const arr = [
      'peach',
      'straw',
      'apple',
      'spork',
    ];

    const stableSorting = (s1, s2) => {
      if (s1[0] <= s2[0]) return -1;
      return 1;
    };

    const sortedList = arr.sort(stableSorting);
    assert(sortedList.join(',') === 'apple,peach,spork,straw');
  });

  // Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。ES2016 引入了该方法
  it('should array.includes', () => {
    const list = [ 3, 1, 2, 9 ];
    const has1 = list.includes(1, 0); // 第一个参数是要搜索的值，第二个为起始位置，默认为0， 如果是负数则为倒数起始位置
    const has2 = list.includes(1, -2);
    assert(has1 === true);
    assert(has2 === false);
  });

});
