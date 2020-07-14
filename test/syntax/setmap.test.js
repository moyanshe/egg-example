'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/syntax/setmap.test.js', () => {

  // ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
  // Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
  // 可以通过set给数组去重
  it('should setmap.new set()', () => {
    const s = new Set([ 1, 2, 2, 3, 4, 4 ]);
    s.add(1);
    s.add(2);
    assert([ ...s ].join('') === '1234');
  });

  // 两个对象哪怕内容相等也会被认为是不相等的
  it('should setmap.setobject', () => {
    const s = new Set();
    s.add({ name: 'zhangsan' });
    s.add({ name: 'zhangsan' });
    assert(s.size === 2);

    const user = { name: 'zhangsan' };
    const s1 = new Set([ user, user ]);
    assert(s1.size === 1);

    if (s1.has(user)) {
      s1.delete(user);
    }
    assert(s1.size === 0);
  });

  // 交并集计算
  it('should setmap.union', () => {
    // 计算并集
    const a = [ 1, 2, 3 ];
    const b = [ 3, 4, 5 ];
    const union = new Set([ ...a, ...b ]);
    assert([ ...union ].join('') === '12345');

    // 计算交集
    const cross = new Set([ ...a ].filter(x => b.includes(x)));
    assert([ ...cross ].join('') === '3');
  });

});
