const app = require("./app/index");

const { APP_PORT } = require("./app/config"); // 执行-引入环境变量

app.listen(APP_PORT, () => {
  console.log(`koa web service is running in ${APP_PORT} port`);
});
