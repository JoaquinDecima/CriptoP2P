/* eslint-disable no-undef */
import ChangeState from '../../src/tools/ChangeState.js';
import { assert, expect } from 'chai';

describe('Tools - ChangeState', () => {
    it('Change state - CONFIRMADO', () => {
        expect(() => ChangeState.CONFIRMADO('user', 'transaction')).to.Throw('This transaction is already confirmed');
    });
    it('Change state - CANCELADO', () => {
        expect(() => ChangeState.CANCELADO('user', 'transaction')).to.Throw('This transaction is already canceled');
    });
    it('Change state - ESPERANDO - Diferent User', () => {
        const user = { _id : 1 };
        const transaction = { buyer : { _id : 2 }, status : 'ESPERANDO' };
        expect(() => ChangeState.ESPERANDO(user, transaction)).to.Throw('This action is not available for this user');
    });
    it('Change state - ESPERANDO - Same User', () => {
        const user = { _id : 1 };
        const transaction = { buyer : user, status : 'ESPERANDO' };
        ChangeState.ESPERANDO(user, transaction)
        assert.equal(transaction.status, 'PAGADO');
    });
    it('Change state - PAGADO - Diferent User', () => {
        const user = { _id : 1 };
        const transaction = { seller : { _id : 2 }, status : 'PAGADO' };
        expect(() => ChangeState.PAGADO(user, transaction)).to.Throw('This action is not available for this user');
    });
    it('Change state - PAGADO - Same User', () => {
        const user = { _id : 1 };
        const transaction = { seller : user, status : 'PAGADO', createDate : new Date(), reputation : 0 };
        ChangeState.PAGADO(user, transaction)
        assert.equal(transaction.status, 'CONFIRMADO');
        assert.equal(transaction.reputation, 10);
        let date = new Date();
        date.setMinutes(date.getMinutes() - 31);
        const transaction2 = { seller : user, status : 'PAGADO', createDate : date, reputation : 0 };
        ChangeState.PAGADO(user, transaction2);
        assert.equal(transaction2.reputation, 5);
    });
});