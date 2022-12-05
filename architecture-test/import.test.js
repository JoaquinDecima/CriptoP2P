/* eslint-disable no-undef */
const {checkImportsContains, checkImportsNotContains} = require('./vasak-archt-js/checkImport.cjs');

describe("Verify imports", () => {
    it("Verify imports in model", () => {
        expect(checkImportsContains('./src/model', 'mongoose')).toBe(true);
        expect(checkImportsNotContains('./src/model', 'express')).toBe(true);
    });
    it("Verify imports in repositories", () => {
        expect(checkImportsContains('./src/repositories', 'mongoose')).toBe(true);
        expect(checkImportsNotContains('./src/repositories', 'express')).toBe(true);
    });
    it("Verify imports in service", () => {
        expect(checkImportsContains('./src/service', 'Repository')).toBe(true);
        expect(checkImportsNotContains('./src/service', 'mongoose')).toBe(true);
        expect(checkImportsNotContains('./src/service', 'express')).toBe(true);
    });
    it("Verify imports in router", () => {
        expect(checkImportsContains('./src/router', 'express')).toBe(true);
        expect(checkImportsContains('./src/router', 'Service')).toBe(true);
        expect(checkImportsNotContains('./src/router', 'Repository')).toBe(true);
        expect(checkImportsNotContains('./src/router', 'mongoose')).toBe(true);
    });
});