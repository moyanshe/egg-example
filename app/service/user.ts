const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        const userInfo = await this.app.mysql.get("users", {id:uid})
        return userInfo;
    }
}

module.exports = UserService;