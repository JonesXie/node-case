const service = require("../service/label.service.js");

class LabelController {
  /**创建标签 */
  async create(ctx, next) {
    const { name } = ctx.request.body;
    const result = await service.create(name);
    ctx.body = {
      msg: "成功~",
      res: result,
    };
  }

  /**获取标签列表 */
  async list(ctx, next) {
    const { offset, size } = ctx.query;
    const result = await service.getList(offset, size);
    ctx.body = {
      msg: "成功~",
      res: result,
    };
  }
}

module.exports = new LabelController();
