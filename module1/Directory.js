 let fs = require("fs");
let path = require('path')
let process = require('process')

// //fs.mkdirSync("shiv");
//fs.mkdirSync("my")
//fs.rmdirSync("shiv");

//process.chdir('./shiv')
// //  //let doesExist = fs.existsSync("Directory.js")
// //  //console.log(doesExist)

// //  let statofPath = fs.lstatSync("shiv")
// //  //console.log(statofPath);
// //  //console.log(statofPath.isFile());
// //  console.log(statofPath.isDirectory());
// //  let  address = "/Users/shiv/Desktop/Batch/module1"
// //  let content = fs.readdirSync(address);

// let inputArr = process.argv.slice(2);
// let cmd = inputArr[0];
// let paths = inputArr[1];


// //console.log('cmd', cmd);

//  let path1 = process.cwd();

// // //console.log(path1)

//  let newone = path.join(path1,"shiv",cmd);
// process.chdir('./shiv')
// let p = process.cwd();

// console.log('here path',p);

// fs.writeFileSync("Hello1.txt","hello there shivam")
// fs.writeFileSync("shiv1.txt","hey see it works")
// fs.unlinkSync("Hello1.txt")

// let c = process.argv.slice(2);
// let first = c[0];
// let paths = c[1];


// let p = process.cwd();

// let arr = ['JS', 'Browser', 'React'];
// let secondarr = ['content']

// for(let i = 0; i < arr.length; i++){

//    let see = fs.mkdirSync(arr[i]);

//  for(let j = i; j < 5; i++){

//     let other = fs.mkdirSync(secondarr[j])
//     let m  = path.join(p,first,see,other);
//     fs.writeFileSync(m,paths)
   
// }

// }
// July-24 th class FILE SYSTEM AND PATH TASK
let getInput = process.argv.slice(2);
let first = getInput[0];

let currPath = process.cwd();
let jPath = path.join(currPath,first);

let isModulePresent = fs.existsSync(jPath);

if(isModulePresent){
    console.log('present');
    return;
}
else
{

    fs.mkdirSync(jPath);
    let otherInput = getInput.slice(1, 4);
    for(let i = 0; i < otherInput.length; i++){
        let prevousPathJoin = path.join(jPath, otherInput[i]);
        console.log('created folder inside web-dev',otherInput[i]);
        fs.mkdirSync(prevousPathJoin);

        for(let j = 1; j <= 5; j++){

            let aginJoinPreviousPath = path.join(prevousPathJoin, "module"+[j]);
            let fileWrite = fs.writeFileSync(aginJoinPreviousPath,"Hello Now you have created Success");

        console.log('modules',j,'created')           


        }

    }



}

