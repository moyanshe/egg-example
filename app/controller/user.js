'use strict';

const Controller = require('egg').Controller;

// function toInt(str) {
//   if (typeof str === 'number') return str;
//   if (!str) return str;
//   return parseInt(str, 10) || 0;
// }

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.service.user.find(userId);
    // const userInfo = await this.app.mysql.get("users", {id:userId})

    // 通过ctx或者app都可以
    // const userInfo = await ctx.model.User.findByPk(toInt(userId));
    // const userInfo = await this.app.model.User.findByPk(toInt(userId));
    ctx.body = `user:${userInfo.id}`;
  }

}

module.exports = UserController;
