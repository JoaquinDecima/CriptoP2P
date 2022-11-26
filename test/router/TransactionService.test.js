/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';

import chaiHttp from 'chai-http';
import chia from "chai";
import { server } from '../../src/server.js';

chia.use(chaiHttp);
const expect = chia.expect

describe('TransactionRouter', () => {
    it('GET /transaction', (done) => {
        chia.request(server)
            .get('/api/transaction')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
});