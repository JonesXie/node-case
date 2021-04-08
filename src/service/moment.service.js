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
              m.id,
              m.content,
              m.createAt addTime,
              JSON_OBJECT( 'id', u.id, 'name', u.NAME ) USER,
              JSON_ARRAYAGG( JSON_OBJECT( 'id', l.id, 'name', l.NAME ) ) labels,
              (  SELECT
                    IF(
                        COUNT( c.id ),
                        JSON_ARRAYAGG( JSON_OBJECT( 'id', c.id, 'commentId', c.comment_id, 'content', c.content ) ),
                        NULL 
                      ) 
                  FROM
                    COMMENT c 
                  WHERE
                    c.moment_id = m.id 
              ) comments 
            FROM
              moment m
              LEFT JOIN user u ON u.id = m.user_id
              LEFT JOIN moment_label ml ON ml.moment_id = m.id
              LEFT JOIN label l ON ml.label_id = l.id 
            WHERE
              m.id = ?;`;
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
              (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id ) commentCount,
              (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id ) labelCount
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

  /**检测是否存在动态-标签关系 */
  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result[0] ? true : false;
  }

  /**添加动态-标签关系 */
  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO  moment_label (moment_id, label_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result[0] ? true : false;
  }
}

module.exports = new MomentService();
