const path = require('path')
const fs = require('fs')

// 封装读取目录内容方法
const dir = require('./dir')

// 封装读取文件内容方法
const file = require('./file')

/**
 * 获取静态资源内容
 * @param  {object} ctx koa上下文
 * @param  {string} 静态资源目录在本地的绝对路径
 * @return  {string} 请求获取到的本地内容
 */
async function content(ctx, fullStaticPath) {
  // 封装请求资源的绝对路径
  // console.log(fullStaticPath, ctx.url)
  let reqPath = path.join(fullStaticPath, ctx.url)
  // console.log(reqPath)
  // 判断请求路径存在
  let exist = fs.existsSync(reqPath)

  // 返回的请求内容
  let content = ''

  if(!exist) {
    content = '404 Not Found! o(╯□╰)o！'
  } else {
    //查询文件信息，判断访问地址是文件夹还是文件
    let stat = fs.statSync( reqPath )
    // console.log(stat.isDirectory())

    // 判断类型
    if(stat.isDirectory()) {
      // 目录，使用目录阅读器
      // console.log(ctx.url)
      content = dir(ctx.url, reqPath)
    } else {
      // 文件
      content = await file(reqPath)
    }
  }

  return content
}

module.exports = content