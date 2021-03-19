const crypto = require("crypto");

/**
 * 给密码加密
 * @param {string} password
 * @returns
 */
const md5password = (password) => {
  const md5 = crypto.createHash("md5"); // 创建 hash 为 md5 方法
  const result = md5.update(password).digest("hex"); // hex 十六进制
  return result;
};

module.exports = md5password;
