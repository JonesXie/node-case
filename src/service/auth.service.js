const connection = require("../app/database");

class AuthService {
  /**
   * 验证是否有权限 sql
   * @param {*} 查询表 表名
   * @param {*} 操作的记录id
   * @param {*} 用户的userId
   * @returns 布尔值 有权限=true
   */
  async checkResource(tableName, id, userId) {
    const statement = `SELECT * FROM ${tableName} WHERE id = ? AND user_id = ?;`;
    const [result] = await connection.execute(statement, [id, userId]);
    return result.length === 0 ? false : true;
  }
}
module.exports = new AuthService();
