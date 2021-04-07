const jwt = require("jsonwebtoken");

const { PRIVATE_KEY } = require("../app/config");

class LoginController {
  /**用户登录-颁发token */
  async login(ctx, next) {
    const { id, name } = ctx.user;
    const token = jwt.sign(
      {
        id,
        name,
      },
      PRIVATE_KEY,
      {
        expiresIn: 60 * 60 * 24, // 秒为单位
        algorithm: "RS256",
      }
    );
    ctx.body = { id, name, token };
  }

  /**测试登录-成功 */
  async success(ctx, next) {
    console.log(ctx.user);
    ctx.body = { msg: "验证成功~" };
  }
}
module.exports = new LoginController();
