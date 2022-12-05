const { getAllfilesContentInFolder, getContentInFile } = require('./filesMamnager.cjs');

function checkFileUseExport(file) {
    let fileContent = getContentInFile(file);
    let useExport = false;
    fileContent.map(line => {
        useExport = useExport || line.includes('export');
    });
    return useExport;
}

function checkFolderUseExportDefault(dir) {
    let filesContent = getAllfilesContentInFolder(dir);
    let useExportDefault = false;
    filesContent.map(file => {
        file.map(line => {
            useExportDefault = useExportDefault || line.includes('export default');
        });
    });
    return useExportDefault;
}

function checkFolderUseExport(dir) {
    let filesContent = getAllfilesContentInFolder(dir);
    let useExport = false;
    filesContent.map(file => {
        file.map(line => {
            useExport = useExport || line.includes('export');
        });
    });
    return useExport;
}

module.exports = { checkFileUseExport, checkFolderUseExportDefault, checkFolderUseExport };