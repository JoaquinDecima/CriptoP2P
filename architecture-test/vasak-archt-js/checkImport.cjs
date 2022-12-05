const getAllImports = require('./filesMamnager.cjs');

function checkFolderImportsContains(dir, contains) {
    let containsBool = true;
    let imports = getAllImports(dir);
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

function checkFolderImportsNotContains(dir, contains) {
    let containsBool = false;
    let imports = getAllImports(dir);
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

module.exports = { checkFolderImportsContains, checkFolderImportsNotContains };

//console.log(checkImportsContains('./src/router', 'express'));