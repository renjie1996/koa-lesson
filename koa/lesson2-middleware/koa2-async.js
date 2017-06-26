function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

module.exports = function () {
  // 异步挂起的
  return async function (ctx, next) {
    log(ctx)
    await next()
  }
}