const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware");
const { picHandler, picsHandler, pictureResize } = require("../middleware/file.middleware");
const { savePic, savePics, getPicByName } = require("../controller/file.controller");

const fileRouter = new Router({ prefix: "/upload" });

/**上传单个图片 */
fileRouter.post("/pic", verifyAuth, picHandler, savePic);

/**上传多个图片 */
fileRouter.post("/pics", verifyAuth, picsHandler, pictureResize, savePics);

/**显示图片 */
fileRouter.get("/show/:name", getPicByName);

module.exports = fileRouter;
