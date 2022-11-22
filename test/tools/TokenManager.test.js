/* eslint-disable no-undef */
import TokenManager from '../../src/tools/TokenManager.js';
import { assert, expect } from 'chai';

describe('Tools - TokenManager', () => {
    it('Generate token', () => {
        assert.notEqual(TokenManager.generateToken({username:"test"}), null);
    });
    it('Verify token', () => {
        const token = TokenManager.generateToken({username:"test"});
        assert.notEqual(TokenManager.verifyToken(token), null);
        expect(TokenManager.verifyToken(token)).to.have.property('user');
    });
});