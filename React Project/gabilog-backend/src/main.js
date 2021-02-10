require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

// 비구조와 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });

import api from './api';

const app = new Koa();
const router = new Router();

//라우터 설정 router settings

router.use('/api', api.routes()); // api 라우트 적용

router.get('/', (ctx) => {
  ctx.body = 'home';
});

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// PORT가 지정되어 있지 않은 경우에는 4000 사용
const port = PORT || 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
