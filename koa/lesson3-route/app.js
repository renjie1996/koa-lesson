const koa = require('koa')
const app = new koa()
const fs = require('fs')
// 中间件就是函数

/**
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}      
 */

function render(page) {
  return new Promise((resolve, reject) => {
    let viewUrl = `./view/${page}`
    fs.readFile(viewUrl, 'binary', (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */
async function route(url) {
  let view = '404.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }
  // 确定了view再渲染
  let html = await render(view)
  return html
}

app.use(async (ctx) => {
  let url = ctx.request.url
  let html = await route(url)
  ctx.body = html
})

app.listen(3000, () => {
  console.log('listen on port 3000')
})