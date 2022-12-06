const { getAllfilesContentInFolder } = require('./filesMamnager.cjs');

function checkFolderOpenAPIUses(dir) {
    let filesContent = getAllfilesContentInFolder(dir);
    let openAPI = true;
    filesContent.map(file => {
        let fileDoc = false
        file.map(line => {
            fileDoc = fileDoc || line.includes("@openapi");
        });
        openAPI = openAPI && fileDoc;
    });
    return openAPI;
}

function checkFolderOpenAPIUsesTag(dir) {
    let filesContent = getAllfilesContentInFolder(dir);
    let openAPI = true;
    filesContent.map(file => {
        let fileDoc = false
        file.map(line => {
            fileDoc = fileDoc || line.includes("* tags:");
        });
        openAPI = openAPI && fileDoc;
    });
    return openAPI;
}

module.exports = { checkFolderOpenAPIUses, checkFolderOpenAPIUsesTag };