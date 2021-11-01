let fs = require('fs');
fs.readFile('f1.txt', cb);
console.log('before');
function cb(err , data){
    if(err){console.log(err)}
    else{
       console.log(" "+ data)
       console.log(" f1 byte"+data.byteLength);

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
        console.log(" "+data);
        
        if(data.byteLength > 10){
        fs.readFile('f4.txt', cb3);
        }else{
        fs.readFile('f5.txt', cb4);
        }

    }
}
function cb3(err , data){
    if(err){console.log(err)}
    else{
        console.log(" "+data);
        console.log('after')
    }
}
function cb4(err , data){
    if(err){console.log(err)}
    else{
        console.log(" "+data);
        console.log('after')
    }
}
function cb2(err , data){
    if(err){console.log(err)}
    else{
        console.log(" "+data);
        console.log("f3 byte  "+data.byteLength);
        
        if(data.byteLength > 20){
            fs.readFile('f6.txt', cb5);
        }else{
            fs.readFile('f7.txt', cb6);
        }
    }
}
function cb5(err , data){
    if(err){console.log(err)}
    else{
        console.log(" "+data);
        console.log('after')
    }
}
function cb6(err , data){
    if(err){console.log(err)}
    else{
        console.log(" "+data);
        console.log('after')
    }
}

