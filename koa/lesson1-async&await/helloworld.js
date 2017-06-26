var koa = require('koa')
// 实例化
var app = new koa()

app.use(function *() {
  this.body = 'Hello World'
}).listen(3000, ()=>{
  console.log('listening on 3000 port')
})