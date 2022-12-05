/* eslint-disable no-undef */
const { checkFileNotUseStrict, checkFolderNotUseStrict } = require('./vasak-archt-js/checkStrict.cjs');

describe("Verify strict", () => {
    it("Verify strict in model", () => {
        expect(checkFolderNotUseStrict('./src/model')).toBe(true);
    });
    it("Verify strict in repositories", () => {
        expect(checkFolderNotUseStrict('./src/repositories')).toBe(true);
    });
    it("Verify strict in service", () => {
        expect(checkFolderNotUseStrict('./src/service')).toBe(true);
    });
    it("Verify strict in router", () => {
        expect(checkFolderNotUseStrict('./src/router')).toBe(true);
    });
    it("Verify strict in middleware", () => {
        expect(checkFolderNotUseStrict('./src/middleware')).toBe(true);
    });
    it("Verify strict in data", () => {
        expect(checkFolderNotUseStrict('./src/data')).toBe(true);
    });
    it("Verify strict in config", () => {
        expect(checkFolderNotUseStrict('./src/config')).toBe(true);
    });
    it("Verify strict in tools", () => {
        expect(checkFolderNotUseStrict('./src/tools')).toBe(true);
    });
    it("Verify strict in server.js", () => {
        expect(checkFileNotUseStrict('./src/server.js')).toBe(true);
    })
});