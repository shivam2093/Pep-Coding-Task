let fs = require("fs")
let path = require("path")
const { type } = require("os")


let types = {

    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]

}

function getKey(prop){

    for(let key in types){
            if(types[key].includes(prop)){  
                return key;    
            }
    }
}


function copytoDest(untilRandom, fromRandom){
    let srcPath = untilRandom
    let destPath = fromRandom
    let toCopyFrom = path.basename(srcPath);
    let finalJoin = path.join(destPath,toCopyFrom)
    fs.copyFileSync(srcPath,finalJoin);
}


function name(src) {
// code
let allFilesArray = fs.readdirSync(src);

    for(let i = 0; i < allFilesArray.length; i++){
        //to get an extension
        let nameOfEach = allFilesArray[i];
        let fullpath = path.join(src , nameOfEach);

        // check  is it file or folder
        let statOffile = fs.lstatSync(fullpath);

        if(statOffile.isFile()){

            let ext = path.extname(fullpath);
        let nameOfDirectory =  getKey(ext.slice(1))

            if(nameOfDirectory == undefined){

            let forOther = path.join(src,'Other')
            let modulePres = fs.existsSync(forOther)
            if(modulePres) {
                copytoDest(fullpath,forOther)
                continue;
            }
        else {
        fs.mkdirSync(forOther)
        copytoDest(fullpath,forOther)
        }
        } else {

        //JOIN THE PATH
        let paths = path.join(src,nameOfDirectory)
        let modulePres = fs.existsSync(paths)

                if(modulePres) {
                copytoDest(fullpath,paths)
                continue;
            } else {
            fs.mkdirSync(paths);
            copytoDest(fullpath,paths)
                }
                }
            }
}


}
    module.exports = {
        orx : name
    }