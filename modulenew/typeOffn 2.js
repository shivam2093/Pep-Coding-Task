
//type 1
function fn () {
console.log('function')
return 10;
}
//console.log(fn());
//type 2
let exp = function () {

console.log('hello')

}
exp();

//type 3
(function (){
console.log('IIFE')
})();

// type 4 arrow functions


let m = () => {
    console.log('hey this arrow functions')
}

m();