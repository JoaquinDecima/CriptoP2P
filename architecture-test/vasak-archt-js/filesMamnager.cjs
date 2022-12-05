var fs = require('fs');


function getAllFilesInFolder(dir) {
    return fs.readdirSync(dir);
}

function getAllfilesContentInFolder(dir) {
    let files = getAllFilesInFolder(dir);
    let filesContent = [];
    files.forEach(file => {
        filesContent.push(fs.readFileSync(dir + '/' + file, 'utf8').split('\n'));
    });
    return filesContent;
}

function getContentInFile(file) {
    return fs.readFileSync(file, 'utf8').split('\n')
}

module.exports = { getAllfilesContentInFolder, getContentInFile };

//console.log(getAllImports('./src/model'));