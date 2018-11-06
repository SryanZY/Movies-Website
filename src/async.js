const fs = require('fs')
const util = require('util')
const co = require('co')

co(function *() {
    let data = yield util.promisify(fs.readFile)('./package.json')
    data = JSON.parse(data)
    console.log(data.name)
})

async function readFileAsync () {
    let data = await util.promisify(fs.readFile)('./package.json')
    data = JSON.parse(data)
    console.log(data.name)
}
readFileAsync()