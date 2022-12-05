/* eslint-disable no-undef */
const { checkFileUseExport, checkFolderUseExportDefault, checkFolderUseExport } = require('./vasak-archt-js/checkExport.cjs');

describe("Verify export", () => {
    it("Verify export in model", () => {
        expect(checkFolderUseExport('./src/model')).toBe(true);
    });
    it("Verify export in repositories", () => {
        expect(checkFolderUseExport('./src/repositories')).toBe(true);
    });
    it("Verify export in service", () => {
        expect(checkFolderUseExportDefault('./src/service')).toBe(true);
    });
    it("Verify export in router", () => {
        expect(checkFolderUseExportDefault('./src/router')).toBe(true);
    });
    it("Verify export in middleware", () => {
        expect(checkFolderUseExportDefault('./src/middleware')).toBe(true);
    });
    it("Verify export in tools", () => {
        expect(checkFolderUseExport('./src/tools')).toBe(true);
    });
    it("Verify export in server.js", () => {
        expect(checkFileUseExport('./src/server.js')).toBe(true);
    });
});