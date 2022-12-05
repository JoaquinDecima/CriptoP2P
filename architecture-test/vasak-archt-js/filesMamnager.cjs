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

function getAllImportsInFolder(dir) {
    let filesContent = getAllfilesContentInFolder(dir);
    let imports = [];
    filesContent.map(file => {
        imports.push(file.filter(line => line.includes('import')))
    });
    return imports.map(file => file.map(line => line.replace(';', '')));
}

function getAllImportsInFile(file) {
    let fileContent = getContentInFile(file);
    let imports = fileContent.filter(line => line.includes('import'));
    return imports.map(line => line.replace(';', ''));
}

module.exports = { getAllImportsInFolder, getAllImportsInFile };

//console.log(getAllImports('./src/model'));