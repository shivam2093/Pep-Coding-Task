let path = require("path")
let fs = require("fs")
// path.join()
//input
let inputArr = process.argv.slice(2);
let fileName = inputArr[0];
let content = inputArr[1];
// console.log("fileName", fileName)
// console.log("fileName", content)
// current path or directory

let currentpath = process.cwd();
// console.log("path", currentpath)
// path -> platform independent
// let joinedPath = path.join(currentpath,"abc","def")
// console.log("joined path", joinedPath)

let filePath = path.join(currentpath,"ac");
// console.log("filePath", filePath)

//fs.writeFileSync(filePath,content)


// fs.mkdirSync("input")
let curr = process.cwd();
let joined = path.join(curr)
console.log(joined)
fs.mkdirSync("webdev")

