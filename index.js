var express = require('express');
var socket=require('socket.io');

//app setup

var app=express();
var server=app.listen(4000,function(){
  console.log('listening the request on port 4000');
});


//app static files

app.use(express.static('public'));

//socket satup

var io=socket(server);
 io.on('connection',function(socket){
   console.log('made socket connection',socket.id);

   socket.on('chat',function(data){
      io.sockets.emit('chat',data);
   });

   socket.on('typing',function(data){
     io.broadcast.emit('typing',data);
   })
 });
