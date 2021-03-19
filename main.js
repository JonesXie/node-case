const app = require("./src/app/index");

const { APP_PORT } = require("./src/app/config"); // 执行-引入环境变量

app.listen(APP_PORT, () => {
  console.log(`koa web service is running in ${APP_PORT} port`);
});
