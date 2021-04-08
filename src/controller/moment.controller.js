const momentService = require("../service/moment.service");

class MomentController {
  /**创建动态 */
  async create(ctx, next) {
    const { id } = ctx.user;
    const { content } = ctx.request.body;
    const result = await momentService.create(content, id);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**动态详情 */
  async detail(ctx, next) {
    const { momentId } = ctx.request.params;
    const result = await momentService.detail(momentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**动态列表 */
  async detailList(ctx, next) {
    const { offset, size } = ctx.request.query;
    const [result] = await momentService.detailList(offset, size);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**修改动态 */
  async update(ctx, next) {
    const { momentId } = ctx.params;
    const { content } = ctx.request.body;
    const result = await momentService.update(content, momentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**修改动态 */
  async remove(ctx, next) {
    const { momentId } = ctx.params;
    const result = await momentService.remove(momentId);
    ctx.body = {
      msg: "成功",
      res: result,
    };
  }
  /**动态添加标签 */
  async addLabels(ctx, next) {
    const { labels } = ctx;
    const { momentId } = ctx.params;
    console.log(labels, momentId);

    for (const label of labels) {
      const isExist = await momentService.hasLabel(momentId, label.id);
      if (!isExist) {
        await momentService.addLabel(momentId, label.id);
      }
    }
    ctx.body = {
      msg: "成功",
      // res: result,
    };
  }
}
module.exports = new MomentController();
