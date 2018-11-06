import { promisify } from 'util'
import { resolve } from 'path'
import { readFile, writeFile } from 'fs'

promisify(readFile)(resolve(__dirname, '../package.json')).then(data => {
    data = JSON.parse(data)
    console.log(data.name)
    writeFile(resolve(__dirname, '../text.txt'), String(data.name), 'utf-8')
})
