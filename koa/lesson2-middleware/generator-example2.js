const koa = require('koa')
const app = new koa()
const loggerGenerator = require('./koa1-generator')
// generator 中间件在koa v2中需要用koa-convert封装一下才能使用
const convert = require('koa-convert')
// generator 中间件在koa v2中需要用koa-convert封装一下才能使用
app.use(convert(loggerGenerator()))

app.use((ctx) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});
