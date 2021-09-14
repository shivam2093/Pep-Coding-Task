let treeObj = require('./command/tree')
let helpObj = require('./command/help')
let organizeObj = require('./command/organize');
let process = require('process');

let input = process.argv.slice(2);

let inputArr = input[0];

switch(inputArr){

case "tree":
 treeObj.fnx(input[1]);
 break;
case "organize": 
organizeObj.orx(input[1])
break;
case "help":
     helpObj.helpnx();
    break;
         default:
        console('WRONG COMMAND');
        break;
}
