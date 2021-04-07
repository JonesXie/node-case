const service = require("../service/comment.service");

class CommentController {
  /**添加评论 */
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body;
    const { id } = ctx.user;
    const result = await service.create(id, momentId, content);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }

  /**添加评论 */
  async reply(ctx, next) {
    const { momentId, content } = ctx.request.body;
    const { commentId } = ctx.params;
    const { id } = ctx.user;
    const result = await service.reply(id, momentId, content, commentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }

  /**修改评论 */
  async update(ctx, next) {
    const { content } = ctx.request.body;
    const { commentId } = ctx.params;
    const result = await service.update(commentId, content);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }

  /**删除评论 */
  async remove(ctx, next) {
    const { commentId } = ctx.params;
    const result = await service.remove(commentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }

  /**根据动态id获取评论列表 */
  async getListByMommentId(ctx, next) {
    const { momentId } = ctx.query;
    const [result] = await service.getListByMommentId(momentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
}
module.exports = new CommentController();
