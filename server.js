// httpモジュールの読み込み
// 参考:https://blog.risingstack.com/your-first-node-js-http-server/
const http = require('http')

const recuestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello World!!')
}

const server = http.createServer(recuestHandler)

server.listen(3000)
