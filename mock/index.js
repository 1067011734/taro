// eslint-disable-next-line import/no-commonjs
var Koa = require('koa');
// eslint-disable-next-line import/no-commonjs
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.post('/mock/getName', (ctx, next) => {
  ctx.body={
    status:0,
    result:{
      name:'张三',
      age:'41'
    }
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

  app.listen(8010);
