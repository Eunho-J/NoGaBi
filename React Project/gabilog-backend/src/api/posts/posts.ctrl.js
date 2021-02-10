let postId = 1; // id의 초깃값

// posts 배열의 초기 데이터
const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];
/* 포스트 작성
POST /api/posts
{ title, body }
*/
export const write = (ctx) => {
  //REST API의 Request Body는 ctx.request.body에서 조회할 수 있다.
  const { title, body } = ctx.request.body;
  postId += 1; // 기존 postId 값에 1을 더합니다.
  const post = { id: postId, title, body };
  //posts 배열에 생성한 post 를 PUSH
  posts.push(post);
  ctx.body = post;
};

/* 포스트 목록 조회
GET /api/posts
*/
export const list = (ctx) => {
  ctx.body = posts;
};

/* 특정 포스트 조회
GET /api/posts/:id
*/
export const read = (ctx) => {
  const { id } = ctx.params;
  //주어진 id값으로 포스트 찾기
  //파라미터로 받은 값은 문자열 형식이므로 형식을 맞춰 줘야함
  const post = posts.find((p) => p.id.toString() === id);
  //포스트가 없으면 오류 반환
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = post;
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
export const remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  console.log(id);
  console.log(index);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.body = {
    message: '포스트가 삭제되었습니다.',
  };
  // ctx.status = 204; //No Content;
};

/* 포스트 수정(교체)
PUT /api/posts/:id
{ title, body }
*/
export const replace = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  console.log(id);
  console.log(index);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  // id를 제외한 기존 정보를 날리고, 새 정보로 덮어씌움
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*/
export const update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  console.log(id);
  console.log(index);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  //기존 값에 request로 받은 변경 값만 덮어 씌움.
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
