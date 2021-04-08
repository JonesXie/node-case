const labelService = require("../service/label.service");

/**判断 label 是否存在 */
const verifyLabelExists = async (ctx, next) => {
  const { labels } = ctx.request.body;
  const newLabels = [];
  for (let name of labels) {
    const labelResult = await labelService.getLabelByName(name);
    const label = { name };
    if (!labelResult) {
      // 创建标签数据
      const result = await labelService.create(name);
      label.id = result.insertId;
    } else {
      label.id = labelResult.id;
    }
    newLabels.push(label);
  }
  ctx.labels = newLabels;
  await next();
};

module.exports = {
  verifyLabelExists,
};
