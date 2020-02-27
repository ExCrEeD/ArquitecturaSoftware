console.log('Hello world 2');

const express = require('express');
const app = express();
const path = require('path');
const SocketIO = require('socket.io');

console.log(path.join(__dirname,'../front'));
app.set('port',process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'../front')));


const server = app.listen(app.get('port'),()=>{
    console.log('serve on port',app.get('port'));
});

const io = SocketIO.listen(server);

io.on('connection',(socket)=>{
    console.log('new connection',socket.id);
    socket.on('chat:message',(data)=>{
        io.sockets.emit('chat:message',data);
    })
})



