/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';

import chaiHttp from 'chai-http';
import chia from "chai";
import { server } from '../../src/server.js';

chia.use(chaiHttp);
const expect = chia.expect

describe('TransactionIntentionRouter', () => {
    it('GET /transactionIntention', (done) => {
        chia.request(server)
            .get('/api/transactionalintention')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /transactionIntention/:id', (done) => {
        chia.request(server)
            .get('/api/transactionalintention/6362ab7dacf03d55b455d2f3')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
});