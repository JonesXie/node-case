const connection = require("../app/database");

class LabelService {
  async create(name) {
    const statement = `INSERT INTO label SET name=?`;
    const result = connection.execute(statement, [name]);
    return result;
  }
}

module.exports = new LabelService();
