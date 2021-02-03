const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//라우터 설정 router settings
router.get('/', (ctx) => {
  ctx.body = 'home';
});

router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `Introduction of ${name}` : `Introduction`;
});

router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `Post #${id}` : `Post ID not exists!`;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
