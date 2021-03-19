const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const useRoutes = require("../router");
const errorHandler = require("./error-hanlder");

const app = new Koa();

app.useRoutes = useRoutes;

app.use(bodyparser());
app.useRoutes();
app.on("error", errorHandler);

module.exports = app;
