let request = require('request');
let cheerio = require('cheerio')
let fs = require("fs");
let path = require('path')
let process = require('process')

console.log('before')
let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595' 

request(url , cb);

function cb(err , res , html){
if(err){
    console.log(err)
}else if(res.statuscode == 400){
    console.log('page not found')
} else{
        allMatch(html)
}
}
console.log('after')
function allMatch(html){
    let searchTool = cheerio.load(html);

    let allMatchLink = searchTool('.widget-items.cta-link');
    

    let findAttr = searchTool(allMatchLink).find('a');
    let getattr =  findAttr.attr('href')
    let splitAttr = getattr.split('/')[3]

    let matchResult = `${url}/${splitAttr}`;
    
    request(matchResult, allScorecard);
}

function allScorecard(err, res, html){
if(err){
    console.log(err)
} else if(res.statuscode == 400){
    console.log('Page not found');

} else{
    getScorecard(html);
}
}
console.log('second after')

function getScorecard(html){

    let searchTool = cheerio.load(html);

    let forclass = searchTool('.match-cta-container');


    for(let i = 0; i < forclass.length; i++){
    
     let arrayfirst = searchTool(forclass[i]).find('a');
     let scorecardLink = searchTool(arrayfirst[2]).attr('href')
     console.log('all scorecard', scorecardLink)
     let eachURL = `https://www.espncricinfo.com${scorecardLink}`
     request(eachURL, fun); 
    }
    
   
  

}

function fun(err , res , html){
    if(err){
        console.log(err)
    } else if(res.statuscode == 400){
        console.log('Page not found');
    
    } else{
        playerStat(html);
    }
}



function playerStat(html){

    let searchTool = cheerio.load(html);
    let getTeamName = searchTool('.p-3')
    let arrayfirst = searchTool(getTeamName).find('strong');
    let eleName =  searchTool('.table.batsman tbody')
    let won = searchTool('.table-responsive tbody tr');
    let col = searchTool(won[6]).find('td')
    let c = searchTool(col[1]).text()

    for(let i = 0; i < eleName.length; i++){
        
        let name = searchTool(arrayfirst[i]).text().split('innings')[0]
        let opponent = searchTool(arrayfirst[1]).text().split('innings')[0]
        let currPath = process.cwd();
        let jPath = path.join(currPath,'ipl');
  
            //create Team folder
            let previousPath = path.join(jPath,name);
            let isModulePresent = fs.existsSync(previousPath);

            if(isModulePresent) {
           
               console.log('coming in this loop again if team folder name come again-----')
                let first = searchTool(eleName[i]).find('tr')
                
                for(let k = 0; k < first.length; k++) {
                    
                    let colName = searchTool(first[k]).find('td')
                    let playerName = searchTool(colName[0]).text().trim();

                    
                    let newestPath = path.join(previousPath,playerName+".json");
                    let extName = path.basename(newestPath)
                    if(extName == '.json' || extName == 'Extras.json'){
                        continue;
                    }

                    console.log('path',newestPath)
                    let isModulePresent = fs.existsSync(newestPath);
                    console.log('present',isModulePresent)
                 
                    //if playername exists into team folder

                    if(isModulePresent){
                    console.log('my name ccame again**********')
              
                        let colName = searchTool(first[k]).find('td')
                        let playerName = searchTool(colName[0]).text().trim();
                        let runs = searchTool(colName[2]).text().trim();
                        let ball = searchTool(colName[3]).text().trim(); 
                        let fours = searchTool(colName[5]).text().trim();
                        let sixes = searchTool(colName[6]).text().trim();
                        let sr =  searchTool(colName[7]).text().trim();  
                        if(k % 2 == 1){
                            continue;
                        }
                        if(playerName == 'Extras'){
                            continue;
                        }
                        let opo;
                        if(i == 0){
                            let name = searchTool(arrayfirst[i+1]).text().split('innings')[0]
                            opo = name
                        }
                        let con = [];
                        const jsonFile =  {
                            
                            "playerName": playerName ,
                            "myTeamName":name,
                            "opponent Team":opponent,
                            "runs":runs ,
                            "ball":ball ,
                            "fours":fours,
                            "sixes": sixes ,
                            "sr": sr
                        }
                       // let input = JSON.stringify(jsonFile);
                        con.push(jsonFile);
                        if(isModulePresent){
                        let content = fs.readFileSync(newestPath)
                        con = JSON.parse(content);
                        }
                        con.push(jsonFile)
                        let str = JSON.stringify(con);
                        fs.writeFileSync(newestPath,str)
                       
                    //    let newLink = fs.writeFileSync(`${playerName}.json`, input)
                    //    let newestPath = path.join(newpath,newLink);
                    //    let isModulePresent = fs.existsSync(newestPath);

                    //     if(isModulePresent){

                    //     let content = fs.readFileSync(`${playerName}.json`)
                    //     let data = JSON.parse(content);
                    //     data.push(input)
                    //    }else{
                    //      fs.writeFileSync(`${playerName}.json`, input)
                    //    }

                    }else{

                    
                     //create New player json file if doesn't exist

                     for(let m = 0; m < first.length; m++) {
                        let colName = searchTool(first[m]).find('td')
                     
                        let playerName = searchTool(colName[0]).text().trim();
                        let runs = searchTool(colName[2]).text().trim();
                        let ball = searchTool(colName[3]).text().trim(); 
                        let fours = searchTool(colName[5]).text().trim();
                        let sixes = searchTool(colName[6]).text().trim();
                        let sr =  searchTool(colName[7]).text().trim();  
                        if(m % 2 == 1){
                            continue;
                        }
                        if(playerName == 'Extras'){
                            continue;
                        }
                        let opo
                        if(i==0){
                            let name = searchTool(arrayfirst[i+1]).text().split('innings')[0]
                            opo = name
                            if(opo == ''){
                                opo = opponent;
                            }
                        }
                        const jsonFile =  [{
                            "playerName": playerName,
                            "myTeamName":name,
                            "opponent Team":opponent,
                            "runs":runs ,
                            "ball":ball ,
                            "fours":fours,
                            "sixes": sixes ,
                            "sr": sr
                        }]
                        let input = JSON.stringify(jsonFile);
                        let makeIt = path.join(newestPath);
                         fs.writeFileSync(makeIt,input);
                        

                     }
                   

                    }

                   
        
                //  console.log(playerName, runs , ball, fours , sixes , sr, c)
                }
            }else{

                fs.mkdirSync(previousPath);

                let first = searchTool(eleName[i]).find('tr')
                
                for(let k = 0; k < first.length; k++) {
                    
                    let colName = searchTool(first[k]).find('td')
                    let playerName = searchTool(colName[0]).text().trim();
                  
                    let newestPath = path.join(previousPath.trim(),`${playerName}.json`);
                    let isModulePresent = fs.existsSync(newestPath);
                  
                    //if already exist
                    if(isModulePresent){
                        console.log('check if this coming 231')
                        let colName = searchTool(first[k]).find('td')

                        let playerName = searchTool(colName[0]).text().trim();
                        let runs = searchTool(colName[2]).text().trim();
                        let ball = searchTool(colName[3]).text().trim(); 
                        let fours = searchTool(colName[5]).text().trim();
                        let sixes = searchTool(colName[6]).text().trim();
                        let sr =  searchTool(colName[7]).text().trim(); 
                        if(k % 2 == 1){
                        continue;
                            } 
                        if(playerName == "Extras"){
                            continue;
                        }
                        let opo = '';
                        if(i==0){
                            let name = searchTool(arrayfirst[i+1]).text().split('innings')[0]
                            opo += name
                        }
                        const jsonFile =  [{

                            "playerName": playerName,
                            "myTeamName":name,
                            "opponent Team":opo,
                            "runs":runs ,
                            "ball":ball ,
                            "fours":fours,
                            "sixes": sixes ,
                            "sr": sr
                        }]
                     //console.log('finish programm here 251')

                        let input = JSON.stringify(jsonFile);
                        let content = fs.readFileSync(newestPath)
                        let data = JSON.parse(content);
                         data.push(input)
                       let str = JSON.stringify(data);
                        fs.writeFileSync(newestPath,str)
                        
                       

                    }else{

                    // fs.mkdirSync(newpath); 
                    //if player file doesn't exist
                    console.log('new file creating ---------------------->>>')
                    for(let l = 0; l < first.length; l++) {
                        let colName = searchTool(first[l]).find('td')
                       
                        let playerName = searchTool(colName[0]).text().trim();
                        let runs = searchTool(colName[2]).text().trim();
                        let ball = searchTool(colName[3]).text().trim(); 
                        let fours = searchTool(colName[5]).text().trim();
                        let sixes = searchTool(colName[6]).text().trim();
                        let sr =  searchTool(colName[7]).text().trim();  
                        if(l % 2 == 1){
                            continue;
                        }
                        if(playerName == 'Extras'){
                            continue;
                        }
                        let opo = '';
                        if(i==0){
                            let name = searchTool(arrayfirst[i+1]).text().split('innings')[0]
                            opo += name
                        }
                        const jsonFile =  [{
                            "playerName": playerName,
                            "myTeamName":name,
                            "opponent Team":opo,
                            "runs":runs ,
                            "ball":ball ,
                            "fours":fours,
                            "sixes": sixes ,
                            "sr": sr
                        }]
                        let input = JSON.stringify(jsonFile);
                        let nameIt = path.join(previousPath,`${playerName}.json`);
                        fs.writeFileSync(nameIt,input);
                        

                     }
                  
                    }
        
                //  console.log(playerName, runs , ball, fours , sixes , sr, c)
                }
            
            }

           console.log("Team Name ----->", name);

        //}
        if(i==0){
            let name = searchTool(arrayfirst[i+1]).text().split('innings')[0]
        console.log("oponent ---->" ,name)
        } else{
            let name = searchTool(arrayfirst[i - 1]).text().split('innings')[0]
            console.log("oponent ---->" ,name)
        }

      
        
        
       
    }




}