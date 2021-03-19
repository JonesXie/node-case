const dotenv = require("dotenv");
dotenv.config(); // 将环境变量注入 process 中

module.exports = { APP_HOST, APP_PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env;
