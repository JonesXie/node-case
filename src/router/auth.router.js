const Router = require("koa-router");
const { login, success } = require("../controller/auth.controller");
const { verifyLogin, verifyAuth } = require("../middleware/auth.middleware");

const loginRouter = new Router();

loginRouter.post("/login", verifyLogin, login);

/**测试用户登录 */
loginRouter.get("/test", verifyAuth, success);

module.exports = loginRouter;
