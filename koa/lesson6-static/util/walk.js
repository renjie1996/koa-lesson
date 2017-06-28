const fs = require('fs')
const mimes = require('./mimes')

/**
 * 遍历读取目录内容（子目录，文件名）
 * @param  {string} reqPath 请求资源的绝对路径
 * @return {array} 目录内容列表
 */
function walk(reqPath) {
  let files = fs.readdirSync(reqPath)
  console.log(files)
  // 文件夹数组 文件数组
  let dirList = [], fileList = []
  for(let i = 0, len = files.length;i < len; i ++) {
    let item = files[i]
    let itemArr = item.split('\.')
    // 取后缀
    let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : "undefined"
    if(typeof mimes[ itemMime ] === 'undefined') {
      // files[i] = `[文件夹]${files[i]}`
      dirList.push(files[i])
    } else {
      fileList.push(files[i])
    }
  }
  let result = dirList.concat(fileList)
  // console.log(result)
  return result
}
module.exports = walk