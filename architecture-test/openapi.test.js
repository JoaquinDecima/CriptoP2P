/* eslint-disable no-undef */
const { checkFolderOpenAPIUses, checkFolderOpenAPIUsesTag } = require('./vasak-archt-js/checkOpenAPI.cjs');

describe("Verify OpenAPI", () => {
    it("Verify OpenAPI in router", () => {
        expect(checkFolderOpenAPIUses('./src/router')).toBe(true);
    });
    it("Verify Use Tags", () => {
        expect(checkFolderOpenAPIUsesTag('./src/router')).toBe(true);
    });
});
