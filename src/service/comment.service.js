const connection = require("../app/database");

class CommentService {
  /**添加评论 sql */
  async create(userId, momentId, content) {
    const statement = `INSERT INTO comment (user_id,moment_id,content) VALUES (?,?,?);`;
    const result = connection.execute(statement, [userId, momentId, content]);
    return result;
  }
  /**回复评论 sql */
  async reply(userId, momentId, content, commentId) {
    const statement = `INSERT INTO comment (user_id,moment_id,content,comment_id) VALUES (?,?,?,?);`;
    const result = connection.execute(statement, [userId, momentId, content, commentId]);
    return result;
  }
  /**修改评论 sql */
  async update(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?;`;
    const result = connection.execute(statement, [content, commentId]);
    return result;
  }
  /**删除评论 sql */
  async remove(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?;`;
    const result = connection.execute(statement, [commentId]);
    return result;
  }
  /**根据动态id获取评论列表 sql */
  async getListByMommentId(momentId) {
    const statement = `
            SELECT
              c.id id,
              c.content content,
              c.comment_id commentId,
              JSON_OBJECT( 'id', u.id, 'name', u.NAME ) USER 
            FROM
              COMMENT c
              LEFT JOIN USER u ON u.id = c.user_id 
            WHERE
              c.moment_id = 15;`;
    const result = connection.execute(statement, [momentId]);
    return result;
  }
}

module.exports = new CommentService();
