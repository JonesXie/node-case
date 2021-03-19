const Router = require("koa-router");
const { create } = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new Router({ prefix: "/user" });

userRouter.post("/", verifyUser, handlePassword, create);

// userRouter.get("/:userId", (ctx, next) => {
//   ctx.body = "添加成功";
// });

module.exports = userRouter;
