const getAllImports = require('./filesMamnager.cjs');

function checkImportsContains(dir, contains) {
    let containsBool = false;
    let imports = getAllImports(dir);
    imports = imports.map(file => file.map(line => line.includes(contains)));

    for (let file of imports) {
        let fileBool = false;
        for (let imp of file){
            fileBool = fileBool || imp;
        }
        containsBool = containsBool || fileBool;
    }

    return containsBool;
}

module.exports = checkImportsContains;

//console.log(checkImportsContains('./src/model', 'mongoose'));