const { getAllfilesContentInFolder, getContentInFile } = require('./filesMamnager.cjs');

function checkFileNotUseStrict(file) {
    let fileContent = getContentInFile(file);
    let useStrict = !fileContent[0].includes("use strict");
    return useStrict;
}

function checkFolderNotUseStrict(dir) {
    let filesContent = getAllfilesContentInFolder(dir);
    let useStrict = true;
    filesContent.map(file => {
        useStrict = useStrict && !file[0].includes("use strict");
    });
    return useStrict;
}

module.exports = { checkFileNotUseStrict, checkFolderNotUseStrict };