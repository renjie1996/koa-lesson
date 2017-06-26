const koa = require('koa')
const app = new koa()

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
  }
})