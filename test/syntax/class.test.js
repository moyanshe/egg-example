'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/syntax/class.test.js', () => {

  // ES6 的类，完全可以看作构造函数的另一种写法。类的数据类型就是函数，类本身就指向构造函数。
  it('should class.define', () => {
    class point {}
    assert(typeof point === 'function');
  });

  // 构造函数以及在class定义的方法，都是属于原型（Class.prototype）
  it('should class.function call', () => {
    class B { }
    const b = new B();
    assert(b.constructor === B.prototype.constructor);
  });

  // 属性访问器拦截函数
  it('should class.setget', () => {
    class MyClass {
      constructor() {
        this.properties = {};
      }

      get prop() {
        if ('prop' in this.properties) {
          return this.properties['prop'];
        }
        return undefined;
      }
      set prop(value) {
        this.properties['prop'] = value;
      }
    }

    const inst = new MyClass();

    inst.prop = 123;
    assert(inst.prop === 123);
  });

  // 由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。
  it('should class.name', () => {
    class Point {}
    assert(Point.name === 'Point');
  });

  // 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用
  it('should class.static', () => {
    class User {
      static role() {
        return 'Teacher';
      }

      getNickName() {
        return this.nickName;
      }
    }

    console.log(User.prop);

    const user = new User();

    console.log(User.role);
    assert(User.role() === 'Teacher');
    assert(user.getNickName() === undefined);

    user.nickName = 'zhangsan';
    assert(user.getNickName() === 'zhangsan');
  });
});
