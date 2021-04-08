const path = require("path");
const fs = require("fs");
const fileService = require("../service/file.service");
const { PICTURE_PATH } = require("../constants/file-path");

class FileController {
  /**保存单个图片 */
  async savePic(ctx, next) {
    // console.log(ctx.req.file);
    const { filename, mimetype, size } = ctx.req.file;
    const result = await fileService.savePic(filename, mimetype, size);
    ctx.body = {
      msg: "保存成功~",
      res: result,
    };
  }
  /**保存多个(5)图片 */
  async savePics(ctx, next) {
    const files = ctx.req.files;
    for (const file of files) {
      const { filename, mimetype, size } = file;
      await fileService.savePic(filename, mimetype, size);
    }
    ctx.body = {
      msg: "保存成功~",
    };
  }

  /**通过图片名显示图片 */
  getPicByName(ctx, next) {
    const { name } = ctx.params;
    const { type } = ctx.query;
    let filepath;
    const nameArr = name.split(".");
    const types = ["small", "middle", "large"];
    if (types.includes(type)) {
      filepath = path.join(PICTURE_PATH, `${nameArr[0]}-${type}.${nameArr[1]}`);
    } else {
      filepath = path.join(PICTURE_PATH, name);
    }
    ctx.response.set("content-type", `image/${nameArr[1]}`);
    ctx.body = fs.createReadStream(filepath);
  }
}
module.exports = new FileController();
