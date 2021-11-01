let fs = require('fs');
console.log('before')
fs.readFile('f1.txt', cb);
fs.readFile('f2.txt', cb);
fs.readFile('f3.txt', cb);
fs.readFile('f4.txt', cb);
fs.readFile('f5.txt', cb);
fs.readFile('f6.txt', cb);
fs.readFile('f7.txt', cb);

function cb(err , data){
    if(err){console.log(err)}
    else{
       console.log(" "+ data)
      
       if(data.byteLength > 7){
           fs.readFile('f2.txt', cb1);
       }else{
           fs.readFile('f3.txt',cb2);
       }
    }
}

function cb1(err , data){
    if(err){console.log(err)}
    else{
       console.log(" "+ data)
      
       if(data.byteLength > 10){
           fs.readFile('f4.txt', cb4);
       }else{
           fs.readFile('f5.txt',cb5);
       }
    }
}

function cb4(err , data){
    if(err){console.log(err)}
    else{
       console.log(" for f4 "+ data)
       console.log('after')
    }
}

function cb5(err , data){
    if(err){console.log(err)}
    else{
       console.log(" for f5 "+ data)
       console.log('after')
    }
}
function cb2(err , data){
    if(err){console.log(err)}
    else{
       console.log(" "+ data)
      
       if(data.byteLength > 20){
           fs.readFile('f6.txt', cb6);
       }else{
           fs.readFile('f7.txt',cb7);
       }
    }
}

function cb6(err , data){
    if(err){console.log(err)}
    else{
       console.log(" for f6 "+ data)
       console.log('after')
    }
}

function cb7(err , data){
    if(err){console.log(err)}
    else{
       console.log(" for f7 "+ data)
       console.log('after')
    }
}
