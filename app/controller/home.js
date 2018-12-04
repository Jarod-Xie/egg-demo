const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world, jarod1';
    }
}

module.exports = HomeController;