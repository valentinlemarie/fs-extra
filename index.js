const fs = require('fs-extra')



const dir = './temp';
const file = dir+"/pub.json"


function lireJson() {
    fs.readJson(file).then(data => {
        console.log(data)
    })
}


fs.readJson('./pub.json')
    .then(
        packageObj => {
        fs.remove(dir).then(
            fs.outputJson(file, packageObj).then(
                fs.watchFile(dir+'/pub.json', (curr, prev) => {
                    console.log(`le fichier pub.json a ete modifie: ${curr.mtime}`);
                    lireJson();
                })

            )
        )
    })
    .catch(err => {
        console.error(err)
    });



