let fs = require('fs');

let arr = ["f1.txt","f2.txt","f3.txt","f4.txt"];

// for(let i = 0; i  < arr.length; ){

//       if(i == arr.length){
//             return;
//         }
//     fs.readFile(arr[i], cb);

//     function cb(err, data){

      

//         console.log("file"+i+data);
//         i++;
//     }
// }


function serial(i){
    if(i == arr.length){
        return;
    }

    fs.readFile(arr[i], cb);

    function cb(err, data){
        console.log("data" + data);
        serial(i+1);
    }

}
serial(0);
console.log('after');