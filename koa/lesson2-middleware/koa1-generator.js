/**
 * 日志迭代器 loggerGenerator
 * generator 中间件开发在koa v1和v2中使用
 * generator中间件返回的应该是function * () 函数
 */

// function log(ctx) {
//   console.log(ctx.method, ctx.header.host, ctx.url)
// }

// module.exports = function () {
//   return function* (next) {
//     // 执行中间件的操作
//     log(this)

//     if (next) {
//       yield next
//     }
//   }
// }
/* ./middleware/logger-generator.js */

// 打印函数!
function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url)
}

module.exports = function () {
  return function* (next) {
    // console.log(this)
    // 执行中间件的操作
    log(this)

    if (next) {
      yield next
    }
  }
}