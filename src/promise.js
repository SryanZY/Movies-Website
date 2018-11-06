const fs = require('fs')

// fs.readFile('./package.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         data = JSON.parse(data)
//         console.log(data.name)
//     }
// })

// 2017年过渡式写法
// function readFileAsync (path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, (err, data) => {
//             if (err) reject(err)
//             else resolve(data)
//         })
//     })
// }
// readFileAsync('./package.json').then(data => {
//     data = JSON.parse(data)
//     console.log(data.name)
// }).catch(err => console.log(err))

// 2018年写法，利用util组件中的promisify模块 
const util = require('util')

util.promisify(fs.readFile)('./package.json').then(JSON.parse).then(
    data => console.log(data.name)
).catch(error => console.log(error))