// function makeIterator (arr) {
//     let nextIndex = 0

//     // 返回迭代器对象
//     return {
//         next: () => {
//             if (nextIndex < arr.length) {
//                 return {
//                     value: arr[nextIndex++],
//                     done: false
//                 }
//             } else {
//                 return { done: true }
//             }
//         }
//     }
// }

// const it = makeIterator(['吃饭', '睡觉', '打豆豆'])
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)

function *makeIterator (arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

const gen = makeIterator(['吃饭', '睡觉', '打豆豆'])
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value, gen.next().done)