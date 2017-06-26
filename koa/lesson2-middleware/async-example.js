const koa = require('koa')
const loggerGenerator = require('./koa2-async')
const app = new koa()

app.use(loggerGenerator())

app.use((ctx) => {
  ctx.body = 'hello world!'
})

app.listen(3000, () => {
  console.log('listening on 3000 port')
})
