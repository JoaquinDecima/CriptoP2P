/* eslint-disable no-undef */
const checkImportsContains = require('./vasak-archt-js/tools/checkImport.cjs');

describe("Verify imports", () => {
    it("Verify imports in model", () => {
        expect(checkImportsContains('./src/model', 'mongoose')).toBe(true);
        expect(checkImportsContains('./src/model', 'express')).toBe(false);
    });
    it("Verify imports in repositories", () => {
        expect(checkImportsContains('./src/repositories', 'mongoose')).toBe(true);
        expect(checkImportsContains('./src/repositories', 'express')).toBe(false);
    });
    it("Verify imports in service", () => {
        expect(checkImportsContains('./src/service', 'Repository')).toBe(true);
        expect(checkImportsContains('./src/service', 'mongoose')).toBe(false);
        expect(checkImportsContains('./src/service', 'express')).toBe(false);
    });
    it("Verify imports in router", () => {
        expect(checkImportsContains('./src/router', 'express')).toBe(true);
        expect(checkImportsContains('./src/router', 'Service')).toBe(true);
        expect(checkImportsContains('./src/router', 'Repository')).toBe(false);
        expect(checkImportsContains('./src/router', 'mongoose')).toBe(false);
    });
});