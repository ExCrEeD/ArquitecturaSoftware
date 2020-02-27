const socket = io();


socket.on('chat:message',(data)=>{
    
    var text = document.getElementById("txt");
    text.value = data.message;
});

function enviar(){
    var text = document.getElementById("txt").value;
    socket.emit('chat:message',{message:text});
}