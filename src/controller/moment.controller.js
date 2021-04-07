const service = require("../service/moment.service");

class MomentController {
  /**创建动态 */
  async create(ctx, next) {
    const { id } = ctx.user;
    const { content } = ctx.request.body;
    const result = await service.create(content, id);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**动态详情 */
  async detail(ctx, next) {
    const { momentId } = ctx.request.params;
    const result = await service.detail(momentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**动态列表 */
  async detailList(ctx, next) {
    const { offset, size } = ctx.request.query;
    const [result] = await service.detailList(offset, size);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**修改动态 */
  async update(ctx, next) {
    const { momentId } = ctx.params;
    const { content } = ctx.request.body;
    const result = await service.update(content, momentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**修改动态 */
  async remove(ctx, next) {
    const { momentId } = ctx.params;
    const result = await service.remove(momentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**动态添加标签 */
  async addLabels(ctx, next) {
    ctx.body = {
      msg: "成功",
      // res: result,
    };
  }
}
module.exports = new MomentController();
