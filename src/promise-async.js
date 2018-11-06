const fs = require('fs')
const util = require('util')
const http = require('http')
const readAsync = util.promisify(fs.readFile)

async function init () {
    try {
        let data = await readAsync('./package.json')
        data = JSON.parse(data)
        console.log(data.name)
    } catch (err) {
        console.log(err)
    }
}
init()
http.createServer((req, res) => {
    readAsync('./package.json').then(JSON.parse).then(data => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data.name)
        res.end()
    })
}).listen('3001', '127.0.0.1', () => {
    console.log('Server is running on 127.0.0.1:3001')
})

util.promisify(fs.writeFile)('./text.txt', 'Hello World').then(console.log('finish')).catch(err => console.log(err))

util.promisify(fs.appendFile)('./text.txt', 'SryanZY').then(console.log('inject')).catch(err => {
    if (err) throw new err
})
