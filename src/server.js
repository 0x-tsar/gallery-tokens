// const Koa = require('koa');
// const app = new Koa();

// // logger
// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000);

// const Koa = require('koa');
// const router = require('@koa/router');
// const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
//   console.log('using');
// });

// var _ = router();              //Instantiate the router
// _.get('/hello', ()=>console.log('WORKEDDDD'));   // Define routes

// function *getMessage() {
//    this.body = "Hello world!";
// };

// app.use(_.routes());           //Use the routes defined using the router
// app.listen(3000);





var Koa = require('koa');
var Router = require('@koa/router');

var app = new Koa();
var router = new Router();

router.get('/teste', (ctx, next) => {
//   ctx.router available
  console.log('teste');
});

app
  .use(router.routes())
  .use(router.allowedMethods());



module.exports = app;