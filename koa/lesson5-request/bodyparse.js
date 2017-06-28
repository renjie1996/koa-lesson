const koa = require('koa')
const app = new koa()
const bodyparser = require('koa-bodyparser')
// 使用bodyparse
app.use(bodyparser())
// 使用中间件
app.use( async (ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    // GET请求时
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if(ctx.url === '/' && ctx.method === 'POST') {
    // 解析请求数据块
    ctx.body = ctx.request.body
  } else {
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})