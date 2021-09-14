let fs = require('fs')

let read = fs.readFileSync("ac.txt");
// readable form typecast from hexa to String
console.log('readNow'+ read)
// buffer Hexa form
console.log('readNow', read)

let wr = fs.writeFileSync("myfile", "hello Brother");
console.log(wr)

// let ap = fs.appendFileSync("myfile", "every thing good")
// console.log(ap)

let del = fs.unlinkSync("myfile");
console.log(del)
