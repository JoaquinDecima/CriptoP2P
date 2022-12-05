/* eslint-disable no-undef */
const { checkFileImportsContains, checkFolderImportsContains, checkFileImportsNotContains, checkFolderImportsNotContains } = require('./vasak-archt-js/checkImport.cjs');

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
        expect(checkFolderImportsNotContains('./src/middleware', 'Model')).toBe(true);
    });
    it("Verify imports in router", () => {
        expect(checkFolderImportsContains('./src/router', 'express')).toBe(true);
        expect(checkFolderImportsContains('./src/router', 'Service')).toBe(true);
        expect(checkFolderImportsNotContains('./src/router', 'Repository')).toBe(true);
        expect(checkFolderImportsNotContains('./src/router', 'mongoose')).toBe(true);
        expect(checkFolderImportsNotContains('./src/middleware', 'Model')).toBe(true);
    });
    it("Verify imports in middleware", () => {
        expect(checkFolderImportsNotContains('./src/middleware', 'Service')).toBe(true);
        expect(checkFolderImportsNotContains('./src/middleware', 'Repository')).toBe(true);
        expect(checkFolderImportsNotContains('./src/middleware', 'mongoose')).toBe(true);
        expect(checkFolderImportsNotContains('./src/middleware', 'Model')).toBe(true);
        expect(checkFolderImportsNotContains('./src/middleware', 'Route')).toBe(true);
    });
    it("Verify imports in tools", () => {
        expect(checkFolderImportsNotContains('./src/tools', 'Repository')).toBe(true);
        expect(checkFolderImportsNotContains('./src/tools', 'mongoose')).toBe(true);
        expect(checkFolderImportsNotContains('./src/tools', 'Model')).toBe(true);
        expect(checkFolderImportsNotContains('./src/tools', 'Route')).toBe(true);
    });
    it("Verify imports in data", () => {
        expect(checkFolderImportsNotContains('./src/middleware', 'Service')).toBe(true);
        expect(checkFolderImportsNotContains('./src/data', 'Repository')).toBe(true);
        expect(checkFolderImportsNotContains('./src/data', 'mongoose')).toBe(true);
        expect(checkFolderImportsNotContains('./src/data', 'Model')).toBe(true);
        expect(checkFolderImportsNotContains('./src/data', 'Route')).toBe(true);
    });it("Verify imports in config", () => {
        expect(checkFolderImportsNotContains('./src/middleware', 'Service')).toBe(true);
        expect(checkFolderImportsNotContains('./src/config', 'Repository')).toBe(true);
        expect(checkFolderImportsNotContains('./src/config', 'Model')).toBe(true);
        expect(checkFolderImportsNotContains('./src/config', 'Route')).toBe(true);
    });
    it("Verify imports in server", () => {
        expect(checkFileImportsContains('./src/server.js', 'express')).toBe(true);
        expect(checkFileImportsContains('./src/server.js', 'swagger')).toBe(true);
        expect(checkFileImportsContains('./src/server.js', 'enviroment')).toBe(true);
        expect(checkFileImportsContains('./src/server.js', 'Router')).toBe(true);
        expect(checkFileImportsNotContains('./src/server.js', 'mongoose')).toBe(true);
        expect(checkFileImportsNotContains('./src/server.js', 'Service')).toBe(true);
        expect(checkFileImportsNotContains('./src/server.js', 'Repository')).toBe(true);
        expect(checkFileImportsNotContains('./src/server.js', 'Model')).toBe(true);
    });
});