'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  Sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};
