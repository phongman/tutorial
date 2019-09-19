var fs = require('fs');
var path = require('path');

var pathLink = path.join(__dirname,'hqdefault.jpg');

fs.readFile(pathLink,function(err,img){
    if(err) throw err;
    fs.writeFile('mynewimg.jpg',img,function(err){
        if(err) throw err;
        console.log('Saved');
    })
})