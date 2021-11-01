let request = require('request');
let cheerio = require('cheerio')
let bowlers = [];
let count = 0;
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard"
request(url, cb)

function cb(err,res, html){
if(err){
    console.log(err)
}else if(res.statuscode == 400){
    console.log('Not found')
} 
else{
    myfunc(html);
}
}

function myfunc(html){

    let searchTool = cheerio.load(html);
    //till 
    let eleName =  searchTool('.table.bowler tbody tr')
    //only to get length of bowlers
    for(let i = 0; i < eleName.length; i++){
        let col = searchTool(eleName[i]).find('td');
        if(col.length > 1){
            count++;
        }
    }
    for(let i = 0; i < eleName.length; i++){
        let col = searchTool(eleName[i]).find('td');

        if(col.length > 1){
            let content = searchTool(col[0]).find('a')
            let link = content.attr('href');
            let fulllink = `http://www.espncricinfo.com/${link}`

            //console.log(fulllink)
           request(fulllink , newfun);
        }

    }
}

function newfun(err, res, data){
if(err){console.log(err)}else if(res.statuscode == 400){console.log('not found')}
else{

    otherfunc(data);
   // console.log(count)

    //when bowlers array and count equal stop 
    if(bowlers.length == count){
        console.table(bowlers)
        sortedBirthday(bowlers)
    }
}
}
function otherfunc(html){

let searchTool = cheerio.load(html);

let element = searchTool('.player-card-description')
let age =   searchTool(element[2]).text();
let name = searchTool(element[0]).text();

bowlers.push({age, name});
// console.table(bowlers)

}

function sortedBirthday(bowlers){

    let newArr = bowlers.map(singleFun);

    function singleFun(obj){
    let name = obj.name
    let age = obj.age;
let ageArr = obj.age.split(" ");
let year = ageArr[0].slice(0,ageArr[0].length - 1);
let days = ageArr[1].slice(0,ageArr[1].length - 1);

let ageIndays = Number(year)*365 + Number(days);

        return {
            name: name,
            ageIndays: ageIndays,
            age:age
        
        }
    }
    let sorted = newArr.sort(cb);
    function cb (a , b){
        return a.ageIndays - b.ageIndays
    }
let finalArr = sorted.map(removeageIndays)
function removeageIndays(obj){

    return {
        name: obj.name,
        age: obj.age
    }
}
console.table(finalArr)

}