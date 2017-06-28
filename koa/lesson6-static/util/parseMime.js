const path = require('path')
const mimes = require('./mimes')
module.exports = function parseMime(url) {
  // 取扩展名 对应的格式
  let extName = path.extname(url)
  extName = extName ? extName.slice(1) : 'unknown'
  return mimes[ extName ]
}