let fs = require('fs');
console.log('Before')
fs.readFile('f1.txt', cb);

function cb(err , data){
    if(err){console.log(err)}
    else{
       console.log(" "+ data)
       fs.readFile('f2.txt', cb1);
    }
}
function cb1(err , data){
    if(err){console.log(err)}
    else{
       console.log(" "+ data)
       fs.readFile('f3.txt', cb2);
    }
}
function cb2(err , data){
    if(err){console.log(err)}
    else{
       console.log(" "+ data)
      
    }
}
console.log('after');


 