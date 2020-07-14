'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.app.logger.info('app level log');
    ctx.logger.info('ctx level log');
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
