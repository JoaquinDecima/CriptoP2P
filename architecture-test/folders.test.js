/* eslint-disable no-undef */
const Archijs = require("archijs");

describe("Verify Name Files and Folders", () => {
    it("/repositories/*Repository", () => {
      const project = Archijs.parseFromPath("src");
      
      const rule = Archijs
        .defineThat()
        .folder('repositories')
        .withNameMatching('Repository')
        .should()
        .matchChildrensName('Repository')
  
      expect(project).toMatchArch(rule);
    });
    it("/service/*Service", () => {
      const project = Archijs.parseFromPath("src");
      
      const rule = Archijs
        .defineThat()
        .folder('service')
        .withNameMatching('Service')
        .should()
        .matchChildrensName('Service')
  
      expect(project).toMatchArch(rule);
    });
    it("/router/*Router", () => {
      const project = Archijs.parseFromPath("src");
      
      const rule = Archijs
        .defineThat()
        .folder('router')
        .withNameMatching('Router')
        .should()
        .matchChildrensName('Router')
  
      expect(project).toMatchArch(rule);
    });
    it("/model/*Model", () => {
      const project = Archijs.parseFromPath("src");
      
      const rule = Archijs
        .defineThat()
        .folder('model')
        .withNameMatching('Model')
        .should()
        .matchChildrensName('Model')
  
      expect(project).toMatchArch(rule);
    });
  });