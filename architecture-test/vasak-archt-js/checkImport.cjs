const getAllImports = require('./filesMamnager.cjs');

function checkImportsContains(dir, contains) {
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

function checkImportsNotContains(dir, contains) {
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

module.exports = { checkImportsContains, checkImportsNotContains };

//console.log(checkImportsContains('./src/router', 'express'));