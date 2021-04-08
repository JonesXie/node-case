const connection = require("../app/database");

class FileService {
  /**保存图片地址到数据库 */
  async savePic(filename, mimetype, size) {
    const statement = `INSERT INTO file (filename,mimetype,size) VALUES (?,?,?);`;
    const [result] = await connection.execute(statement, [filename, mimetype, size]);
    return result;
  }
}

module.exports = new FileService();
