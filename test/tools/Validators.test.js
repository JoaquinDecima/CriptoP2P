/* eslint-disable no-undef */
import {
    validateEmail,
    validatePassword,
    validateCvu,
    validateWallet,
    validateName,
    validateLastName,
    validateAddress,
    validateOperation,
    validatePorcent
} from '../../src/tools/Validators.js';
import { assert, expect } from 'chai';

describe('Tools - Validators', () => {
    it('Email - Correct email format', () => {
        assert(validateEmail('test@test.test'), 'test@test.test');
        assert(validateEmail('joaquin.decimna@gmail.com'), 'joaquin.decimna@gmail.com');
        assert(validateEmail('jdecimna@vasak.net.ar'), 'jdecimna@vasak.net.ar');
    });
    it('Email - Incorrect email format', () => {
        expect(() => validateEmail('test')).to.Throw('Invalid format Email');
        expect(() => validateEmail('test@')).to.Throw('Invalid format Email');
        expect(() => validateEmail('test@test')).to.Throw('Invalid format Email');
        expect(() => validateEmail('test@test.')).to.Throw('Invalid format Email');
    });
    it('Password - Correct password format', () => {
        assert(validatePassword('Bu3n4P455!'), 'Bu3n4P455!');
        assert(validatePassword('Un4Much0m3*0r'), 'Un4Much0m3*0r');
        assert(validatePassword('E5t5&51rV3'), 'E5t5&51rV3');
    });
    it('Password - Incorrect password format', () => {
        expect(() => validatePassword('test')).to.Throw('Invalid format Password');
        expect(() => validatePassword('TEST1')).to.Throw('Invalid format Password');
        expect(() => validatePassword('test@')).to.Throw('Invalid format Password');
        expect(() => validatePassword('test@1')).to.Throw('Invalid format Password');
        expect(() => validatePassword('test@111.')).to.Throw('Invalid format Password');
    });
    it('CVU - Correct CVU format', () => {
        assert(validateCvu('0000000000000000000000'), '0000000000000000000000');
        assert(validateCvu('0000000000010000000000'), '0000000000010000000000');
        assert(validateCvu('1231231231231231231231'), '1231231231231231231231');
    });
    it('CVU - Incorrect CVU format', () => {
        expect(() => validateCvu('000000000000000000000')).to.Throw('Invalid format CVU');
        expect(() => validateCvu('aaaaaaaaa')).to.Throw('Invalid format CVU');
        expect(() => validateCvu('tesasdasdASDAsdasdt@')).to.Throw('Invalid format CVU');
    });
    it('Wallet - Correct Wallet format', () => {
        assert(validateWallet('00000000'), '00000000');
        assert(validateWallet('00100000'), '00100000');
        assert(validateWallet('12312312'), '12312312');
    });
    it('Wallet - Incorrect Wallet format', () => {
        expect(() => validateWallet('000')).to.Throw('Invalid format Wallet');
        expect(() => validateWallet('aaaaaaaaa')).to.Throw('Invalid format Wallet');
        expect(() => validateWallet('tesasdasdASDAsdasdt@')).to.Throw('Invalid format Wallet');
    });
    it('Name - Correct Name format', () => {
        assert(validateName('Pedro'), 'Pedro');
        assert(validateName('Joaquin'), 'Joaquin');
        assert(validateName('Pato'), 'Pato');
    });
    it('Name - Incorrect Name format', () => {
        expect(() => validateName('0')).to.Throw('Invalid format Name');
        expect(() => validateName('9yrh32fh093fh3po4fypfsadpofuap0j3p9fyhapeyfpq3oi4fhpads8')).to.Throw('Invalid format Name');
        expect(() => validateName('Per@n3to')).to.Throw('Invalid format Name');
    });
    it('LastName - Correct LastName format', () => {
        assert(validateLastName('Pedro'), 'Pedro');
        assert(validateLastName('Joaquin'), 'Joaquin');
        assert(validateLastName('Pato'), 'Pato');
    });
    it('LastName - Incorrect LastName format', () => {
        expect(() => validateLastName('0')).to.Throw('Invalid format LastName');
        expect(() => validateLastName('9yrh32fh093fh3po4fypfsadpofuap0j3p9fyhapeyfpq3oi4fhpads8')).to.Throw('Invalid format LastName');
        expect(() => validateLastName('Per@n3to')).to.Throw('Invalid format LastName');
    });
    it('Address - Correct Address format', () => {
        assert(validateAddress('Argentina, Buenos Aires'), 'Argentina, Buenos Aires');
        assert(validateAddress('Puerto Rico'), 'Puerto Rico');
    });
    it('Address - Incorrect Address format', () => {
        expect(() => validateAddress('0')).to.Throw('Invalid format Address');
        expect(() => validateAddress('T!etoiuj4$10u12ASD112e@')).to.Throw('Invalid format Address');
        expect(() => validateAddress('Per@n3to')).to.Throw('Invalid format Address');
    });
    it('Operation - Correct Operation format', () => {
        assert(validateOperation('COMPRA'), 'COMPRA');
        assert(validateOperation('VENTA'), 'VENTA');
    });
    it('Operation - Incorrect Operation format', () => {
        expect(() => validateOperation('conpra')).to.Throw('Invalid format Operation');
        expect(() => validateOperation('KOMPRA')).to.Throw('Invalid format Operation');
        expect(() => validateOperation('Venta')).to.Throw('Invalid format Operation');
        expect(() => validateOperation('V3NTA')).to.Throw('Invalid format Operation');
    });
    it('Porcent - Less than 5%', () => {
        expect(() => validatePorcent(100, 97)).to.be.not.throw();
        expect(() => validatePorcent(97, 100)).to.be.not.throw();
    });
    it('Porcent - Greater than 5%', () => {
        expect(() => validatePorcent(100, 90)).to.Throw('El valor nominal no puede ser mayor al 5% del precio actual');
        expect(() => validatePorcent(97, 1080)).to.Throw('El valor nominal no puede ser mayor al 5% del precio actual');
    });
});