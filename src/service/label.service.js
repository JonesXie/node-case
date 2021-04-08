const connection = require("../app/database");

class LabelService {
  /**创建label sql */
  async create(name) {
    const statement = `INSERT INTO label SET name=?`;
    const [result] = await connection.execute(statement, [name]);
    return result;
  }
  /**检查通过name 查询label sql */
  async getLabelByName(name) {
    const statement = `SELECT * FROM label WHERE name = ?;`;
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }
  /**查询标签列表 sql */
  async getList(offset, size) {
    const statement = `SELECT * FROM label LIMIT ?,?;`;
    const [result] = await connection.execute(statement, [offset, size]);
    return result;
  }
}

module.exports = new LabelService();
