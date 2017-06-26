function getSyncTime() {
  //  返回promise实例
  return new Promise((resolve, reject) => {
    try {
      let startTime = new Date().getTime()
      console.log('创建开始时间: ' + startTime)

      setTimeout(() => {
        let endTime = new Date().getTime()
        console.log('创建结束时间: ' + endTime)
        let data = endTime - startTime
        console.log('时间差为: ' + data)
        // 出口
        resolve(data)
      }, 500)

    } catch (e){
      reject(e)
    }
  })
}

async function getSyncData() {
  // Await让你可以暂停async函数的执行，
  // 直到它受到了一个promise的结果。
  // 这让你可以写出按照执行顺序显示的async代码。
  let time = await getSyncTime()
  // 最底层的await返回需要是Promise对象
  // time经过等待拿到的是resolve出来的值
  console.log('time: ' + time)
  let data = `endTime - startTime = ${time}`
  return data
}

// 负责拿结果打印
async function getData() {
  let data = await getSyncData()
  console.log(data)
}

getData()

