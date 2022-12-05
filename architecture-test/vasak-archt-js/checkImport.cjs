const { getAllImportsInFolder, getAllImportsInFile } = require('./filesMamnager.cjs');


function checkFileImportsContains(file, contains) {
    let imports = getAllImportsInFile(file);
    let containsBool = false;
    imports = imports.map(line => line.includes(contains));
    for (let imp of imports) {
        containsBool = containsBool || imp;
    }
    return containsBool;
}

function checkFolderImportsContains(dir, contains) {
    let containsBool = true;
    let imports = getAllImportsInFolder(dir);
    imports = imports.map(file => file.map(line => line.includes(contains)));

    for (let file of imports) {
        let fileBool = false;
        for (let imp of file) {
            fileBool = fileBool || imp;
        }
        containsBool = containsBool && fileBool;
    }

    return containsBool;
}

function checkFileImportsNotContains(file, contains) {
    let imports = getAllImportsInFile(file);
    let containsBool = true;
    imports = imports.map(line => line.includes(contains));
    for (let imp of imports) {
        containsBool = containsBool && !imp;
    }
    return containsBool;
}

function checkFolderImportsNotContains(dir, contains) {
    let containsBool = false;
    let imports = getAllImportsInFolder(dir);
    imports = imports.map(file => file.map(line => line.includes(contains)));

    for (let file of imports) {
        let fileBool = false;
        for (let imp of file) {
            fileBool = fileBool || imp;
        }
        containsBool = containsBool || fileBool;
    }

    return !containsBool;
}

module.exports = { checkFileImportsContains, checkFolderImportsContains, checkFileImportsNotContains, checkFolderImportsNotContains };

//console.log(checkImportsContains('./src/router', 'express'));