let express = require('express');
let server = express();
let path = require('path');
var router = require('./typeRouter');
var data = require('./database')
server.get('/home/:page',function(req,res,next){
    var page =req.params.page - 1;
    var database = [];
    for(i=page*10; i<page*10+10 ; i++){
        database.push(data[i]);
    }
    res.send(database);
})
console.log(1)

server.use('/type',router);
server.listen(8080,()=>{
    console.log('ket noi thanh cong');
})