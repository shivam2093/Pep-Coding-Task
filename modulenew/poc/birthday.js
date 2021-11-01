let request = require('request');
let cheerio = require('cheerio');


const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard'

request(url,cb);

function cb (err , res , html) {

if(err){
    console.log(err)
} else if(res.statuscode == 400){
    console.log("Page not found")
}else{
    // console.log('here html', html)
getExtract(html);
}

}
console.log('after');


function getExtract(html){

//search tool, retuen function
let searchTool = cheerio.load(html);
//object
let eleName =  searchTool('.table.bowler tbody tr')

// let data = "";
// for(let i = 0; i < eleName.length; i++){
// //html function
// data += searchTool(eleName[i]).html();

// }
// fs.writeFileSync('my.html', data)

for(let i = 0; i < eleName.length; i++){

let col = searchTool(eleName[i]).find('td');

let name = searchTool(col[0]).find('a')
let getattr = name.attr('href')
if(getattr == undefined){
    continue;
}
let fulllink = `https://www.espncricinfo.com${getattr}`

request(fulllink , newcb)
// console.log(fulllink)


}
}
function newcb(err , res, html){
    if(err){
        console.log(err)
    } else if(res.statuscode == 400){
        console.log("Page not found")
    }else{
        // console.log('here html', html)
    getBirthday(html)
    }
}

function getBirthday(html){

let searchTool = cheerio.load(html)

let headingAttr = searchTool('.player-card-description')
 let age = searchTool(headingAttr[2]).text();
let name = searchTool(headingAttr[0]).text();
console.log(name,":",age)

}