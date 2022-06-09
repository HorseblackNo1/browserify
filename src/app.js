// 引入模块
let module1 = require('./module1');
//let module2 = require('./module2');
// let module3 = require('./module3');

  
// import { staticData } from './module1'


const arr = module1.staticData

let arrStr = JSON.stringify(arr)
// console.log("staticData:",arrStr)
console.log(document.getElementById('app'))
let app = document.getElementById('app')
app.innerHTML=arrStr


// module2();
// module3.foo();
// module3.bar();
