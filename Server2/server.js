let express = require('express');
let server = express();
let path = require('path');
var router = require('./typeRouter');
server.get('/home/:number1/:number2',function(req,res,text){
    console.log(req.params);
    var kq = parseInt(req.params.number1) + parseInt(req.params.number2);
    res.json(kq);
})
server.use('/type',router);
server.listen(8080,()=>{
    console.log('ket noi thanh cong');
})