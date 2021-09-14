let fs = require("fs")
let path = require("path")
const { type } = require("os")


let types = {

    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]

}


//console.log(types)
function getKey(prop){

    for(let key in types){

            if(types[key].includes(prop)){  
                return key;    
            }
    }
}


function name(src) {
    
    //console.log('organize command executed',src)

// code

let allFilesArray = fs.readdirSync(src);
for(let i = 0; i < allFilesArray.length; i++){
//to get an extension
let nameOfEach = allFilesArray[i];
let fullpath = path.join(src , nameOfEach);

// check  is it file or folder
 //console.log(fullpath)
let statOffile = fs.lstatSync(fullpath);

if(statOffile.isFile()){

    let ext = path.extname(fullpath);
  let nameOfDirectory =  getKey(ext.slice(1))

  if(nameOfDirectory == undefined){

   let forOther = path.join(src,'Other')
   let modulePres = fs.existsSync(forOther)
   if(modulePres) {
    //console.log(paths,"folder already present")
    let srcPath = fullpath    
    let destPath = forOther
  
    let toCopyFrom = path.basename(srcPath);
    let finalJoin = path.join(destPath,toCopyFrom)
    fs.copyFileSync(srcPath,finalJoin);
    continue;
}
else{
   fs.mkdirSync(forOther)
   let srcPath = fullpath    
   let destPath = forOther
   let toCopyFrom = path.basename(srcPath);
   let finalJoin = path.join(destPath,toCopyFrom)
   fs.copyFileSync(srcPath,finalJoin);
}
  } else {

  //JOIN THE PATH
  let paths = path.join(src,nameOfDirectory)
  let modulePres = fs.existsSync(paths)

        if(modulePres) {
        //console.log(paths,"folder already present")
        let srcPath = fullpath    
        let destPath = paths
      
        let toCopyFrom = path.basename(srcPath);
        let finalJoin = path.join(destPath,toCopyFrom)
        fs.copyFileSync(srcPath,finalJoin);
        continue;
    } else {
     fs.mkdirSync(paths);
    let srcPath = fullpath    
    let destPath = paths
  
    let toCopyFrom = path.basename(srcPath);
    let finalJoin = path.join(destPath,toCopyFrom)
    fs.copyFileSync(srcPath,finalJoin);


        }
        }
    }
}


}

    
    
    
    module.exports = {
        orx : name
    }