let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs')
//request
console.log('before')

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

//cheerio
//webscrapping

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

let name = searchTool(col[0]).text().trim();
let wicket = searchTool(col[4]).text().trim();

console.log(name ,"", wicket)
}

}