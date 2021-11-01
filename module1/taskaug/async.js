let array = [1,2,3,4];
function smaller(x){

     return x * x;
}

function cube(x){
        return x * x *x;
}

// function can be passed as an argument
// implement map js -> pre existing --> same work as map
// it will apply cb fn to all the elements of an array and return the new array
function bigger(arr , cb){
let newArr = [];
for(let i = 0; i < arr.length; i++){
        let dos = cb(arr[i]);
        newArr.push(dos);       
}

return newArr

}
let op = bigger(array , smaller);
let cubes = bigger(array,cube);

console.log(cubes);