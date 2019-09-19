var fs = require('fs');
var path = require('path');

var contentPath = path.join(__dirname , "content.txt")
fs.readFile(contentPath,'utf8',function(err,data){
   if(err){
       console.log(err)
   }
   else console.log(data);
})
console.log('Hello');

fs.writeFile(contentPath,'Hello World',function(err){
    if(err) throw err;
});