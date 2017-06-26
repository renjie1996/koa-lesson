const koa = require('koa')
// 日志迭代器中间件
const loggerGenerator = require('./koa1-generator')
const app = new koa()
// generator 中间件在koa v1中可以直接use使用
// v2 则不一样
app.use(loggerGenerator())

app.use(function *() {
  this.body = 'hello world'
})

app.listen(3000, () => {
  console.log('listening on 3000 port')
})
