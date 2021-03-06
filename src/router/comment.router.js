const Router = require("koa-router");

const { verifyAuth, verifyPermission } = require("../middleware/auth.middleware");
const { create, reply, update, remove, getListByMommentId } = require("../controller/comment.controller");

const commentRouter = new Router({ prefix: "/comment" });

/**添加评论 */
commentRouter.post("/", verifyAuth, create);

/**回复评论 */
commentRouter.post("/:commentId/reply", verifyAuth, reply);

/**修改评论 */
commentRouter.patch("/:commentId", verifyAuth, verifyPermission, update);

/**删除评论 */
commentRouter.delete("/:commentId", verifyAuth, verifyPermission, remove);

/**获取动态下的评论 */
commentRouter.get("/", getListByMommentId);

module.exports = commentRouter;
