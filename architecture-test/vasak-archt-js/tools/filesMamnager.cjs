var fs = require('fs');


function getAllFiles(dir){
    return fs.readdirSync(dir);
}

function getAllfilesContent(dir){
    let files = getAllFiles(dir);
    let filesContent = [];
    files.forEach(file => {
        filesContent.push(fs.readFileSync(dir + '/' + file, 'utf8').split('\n'));
    });
    return filesContent;
}

function getAllImports(dir){
    let filesContent = getAllfilesContent(dir);
    let imports = [];
    filesContent.map(file => {
        imports.push(file.filter(line => line.includes('import')))
    });
    return imports.map(file => file.map(line => line.replace(';', '')));
}

module.exports = getAllImports;

//console.log(getAllImports('./src/model'));