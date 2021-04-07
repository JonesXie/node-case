const connection = require("../app/database");
class MomentService {
  /**创建动态 sql */
  async create(content, id) {
    const statement = `INSERT INTO moment (content,user_id) VALUES (?,?)`;
    const result = await connection.execute(statement, [content, id]);
    return result[0];
  }

  /**获取动态详情 sql */
  async detail(id) {
    const statement = `
          SELECT 
            m.id , m.content, m.createAt addTime, JSON_OBJECT('id',u.id,'name',u.name) user 
          FROM moment m 
          LEFT JOIN user u ON u.id = m.user_id 
          WHERE m.id = ?;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }

  /**获取动态列表 sql */
  async detailList(offset, size) {
    // 不加评论数
    // const statement = `
    //       SELECT
    //         m.id , m.content, m.createAt addTime, JSON_OBJECT('id',u.id,'name',u.name) user
    //       FROM moment m
    //       LEFT JOIN user u ON u.id = m.user_id
    //       LIMIT ?,?;`;

    const statement = `
            SELECT
              m.id,
              m.content,
              m.createAt addTime,
              JSON_OBJECT( 'id', u.id, 'name', u.NAME ) USER ,
              (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id ) comments
            FROM
              moment m
              LEFT JOIN USER u ON u.id = m.user_id 
              LIMIT 12,
              10;
    `;
    const result = await connection.execute(statement, [offset, size]);
    return result;
  }

  /**更新动态 */
  async update(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }

  /**删除动态 */
  async remove(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?`;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }
}

module.exports = new MomentService();
