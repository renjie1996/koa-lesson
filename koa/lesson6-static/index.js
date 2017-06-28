const koa = require('koa')
const app = new koa()

const path = require('path')

const parseMime = require('./util/parseMime')
const content = require('./util/content')
const mimes = require('./util/mimes')

const staticPath = './static'



app.use(async (ctx) => {
  // 静态资源目录在本地的绝对路径
  let fullStaticPath = path.join(__dirname, staticPath)
  // 绝对路径
  // console.log(fullStaticPath)

  // 获取静态资源内容，有可能是文件内容，目录，或404
  let _content = await content( ctx, fullStaticPath )

  // 取扩展名对应的类型
  let _mime = parseMime( ctx.url )
  // console.log(_mime)

  // 如果有对应的文件类型，就配置上下文类型
  if(_mime) {
    ctx.type = _mime
  }

  // 输出静态资源类型
  if(_mime && _mime.indexOf('image/') >= 0) {
    // 图片则用node原生res输出二进制流
    
    ctx.res.writeHead(200)
    ctx.res.write(_content, 'binary')
    ctx.res.end()
  } else {
    ctx.body = _content
  }
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})



