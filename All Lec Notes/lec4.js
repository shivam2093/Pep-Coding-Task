// let fs = require("fs");

// let content = fs.readFileSync("f1.txt");
//buffer -> video, audio, txt
//console.log('content', content);
// + -> concat -> string => text
//console.log("content" + content)
// write -> writeFileSync
// file doesnot exist -> file create, content put
// file does exist -> content override

 //fs.writeFileSync("abc.txt","Hello shivam")
// // update 
// fs.appendFileSync("abc.txt", "are you ok")

// fs.unlinkSync("abc.txt")
let fs = require("fs")
let path = require("path")
let inputArr = process.argv.slice(2);
let mainDir = inputArr[0];
let currentPth = process.cwd();
let mainDirPath = path.join(currentPth,mainDir)
console.log(mainDirPath)
let isMainModule = fs.existsSync(mainDirPath)
if(isMainModule){
    console.log("Directory is already created ")
    return;
} else{
    fs.mkdirSync(mainDir)
let topic = inputArr.slice(1,4)
for(let i = 0; i < topic.length; i++){
let firsttop = path.join(cwd,mainDir,topic[i])
console.log(topic[i],"created")
fs.mkdirSync(firsttop)

for(let j = 1; j<=5; j++){
    let modulePath = path.join(firsttop,"Module"+i);
    fs.mkdirSync(modulePath);
    console.log("module"+i,"created inside", topic[i])
    let filePath = path.join(modulePath,"content.md")
    fs.writeFileSync(filePath,"# hello")
}

}
}
