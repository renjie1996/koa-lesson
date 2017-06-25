## async/await是什么
async/await可以说是co模块和生成器函数的语法糖。用更加清晰的语义解决js异步代码。

熟悉co模块的同学应该都知道，co模块是TJ大神写的一个使用生成器函数来解决异步流程的模块，可以看做是生成器函数的执行器。而async/await则是对co模块的升级，内置生成器函数的执行器，不再依赖co模块。同时，async返回的是Promise。

## async/await

当你用async关键词创建一个函数的时候，这个函数永远都会返回一个Promise。当你在async函数内部进行返回的时候，它会用一个Promise包裹你的值。

```javascript

 // here is an async function

async function getNumber() {

  return 4 // actually returns a Promise

}

// the same function using promises

function getNumber() {

     return Promise.resolve(4)

}

```

Await让你可以暂停async函数的执行，直到它受到了一个promise的结果。这让你可以写出按照执行顺序显示的async代码。

```javascript

 // async function to show user data

async function displayUserData() {

    let me = await fetch('/users/me')

    console.log(me)

}

// promise-based equivalent

function displayUserData() {

    return fetch('/users/me').then(function(me) {

        console.log(me)

    })

})

```
# async/await 的特点：

1. 可以让异步逻辑用同步写法实现
2. 最底层的await返回需要是Promise对象
3. 可以通过多层 async function 的同步写法代替传统的callback嵌套

