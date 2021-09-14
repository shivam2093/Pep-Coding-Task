function fn(){

 fn1();


console.log('hello');

return 10;

}

function fn1(){
    console.log('hello function 1')
    //return 9;
}

//fn(); // function invokation
 let val = fn();
console.log('val', val);
// let arr = [function fn(){
//     console.log('hello')
//     return 10;
// }]


// let temp = [1,2,3,4]
// let arr = [ 1,1.1,true,temp,function fn(){
//     console.log('hell');
//     return 11;
// }]

// let val = arr[arr.length - 1]()
// console.log(arr[arr.length - 1]());
