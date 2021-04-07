const Router = require("koa-router");

const { create, detail, detailList, update, remove, addLabels } = require("../controller/moment.controller.js");

const { verifyAuth, verifyPermission } = require("../middleware/auth.middleware");

const momentRouter = new Router({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);

momentRouter.get("/", detailList);
momentRouter.get("/:momentId", detail);

/**
 * 1 验证登录
 * 2 验证权限
 */
momentRouter.patch("/:momentId", verifyAuth, verifyPermission, update);
momentRouter.delete("/:momentId", verifyAuth, verifyPermission, remove);

/**动态添加标签 */
momentRouter.post("/:momentId/labels", verifyAuth, verifyPermission, addLabels);

module.exports = momentRouter;
