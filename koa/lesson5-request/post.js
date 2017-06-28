const koa = require('koa')
const app = new koa()

// 模拟了bodyparse
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
    ctx.body = html
  } else if(ctx.url === '/' && ctx.method === 'POST') {
    // 解析请求数据块
    let postData = await parsePostData(ctx)
    ctx.body = postData
  } else {
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = ''
      ctx.req.addListener('data', (data) => {
        postData += data
      })
      ctx.req.addListener('end', () => {
        console.log(postData) //userName=xurenjie&nickName=xu&email=2578370399%40qq.com
        let parseData = parseQueryStr(postData)
        resolve(parseData)
      })
    } catch(e) {
      reject(e)
    }
  })
}

function parseQueryStr(str) {
  let queryData = {}
  let queryStrList = str.split('&')
  // console.log(queryStrList)
  for(let [index, queryStr] of queryStrList.entries()) {
    // console.log(queryStr)
    let itemList = queryStr.split('=')
    //将已编码 URI 中所有能识别的转义序列转换成原字符。
    queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
  }
  // console.log(queryData)
  return queryData
}

app.listen(3000, () => {
  console.log('listening on port 3000')
})