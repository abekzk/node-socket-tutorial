// socket.ioを使った通信
// 参考 https://socket.io/get-started/chat

const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const process = require('process')

// ルートでアクセスした時の処理，ページを表示する
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html')
})

// ソケットの通信
io.on('connection', (socket) => {
    // 誰かがメッセージを送信したら，全員にその内容を送る
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

server.listen(3000)
