/* eslint-disable no-undef */
const {checkFolderImportsContains, checkFolderImportsNotContains} = require('./vasak-archt-js/checkImport.cjs');

describe("Verify imports", () => {
    it("Verify imports in model", () => {
        expect(checkFolderImportsContains('./src/model', 'mongoose')).toBe(true);
        expect(checkFolderImportsNotContains('./src/model', 'express')).toBe(true);
    });
    it("Verify imports in repositories", () => {
        expect(checkFolderImportsContains('./src/repositories', 'mongoose')).toBe(true);
        expect(checkFolderImportsNotContains('./src/repositories', 'express')).toBe(true);
        expect(checkFolderImportsNotContains('./src/repositories', 'Service')).toBe(true);
    });
    it("Verify imports in service", () => {
        expect(checkFolderImportsContains('./src/service', 'Repository')).toBe(true);
        expect(checkFolderImportsNotContains('./src/service', 'mongoose')).toBe(true);
        expect(checkFolderImportsNotContains('./src/service', 'express')).toBe(true);
    });
    it("Verify imports in router", () => {
        expect(checkFolderImportsContains('./src/router', 'express')).toBe(true);
        expect(checkFolderImportsContains('./src/router', 'Service')).toBe(true);
        expect(checkFolderImportsNotContains('./src/router', 'Repository')).toBe(true);
        expect(checkFolderImportsNotContains('./src/router', 'mongoose')).toBe(true);
    });
});