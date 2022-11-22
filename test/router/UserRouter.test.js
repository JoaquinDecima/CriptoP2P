/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';

import chaiHttp from 'chai-http';
import chia from "chai";
import { server } from '../../src/server.js';

chia.use(chaiHttp);
const expect = chia.expect

describe('UserRouter', () => {
    it('GET /user', (done) => {
        chia.request(server)
            .get('/api/user')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /user/:id', (done) => {
        chia.request(server)
            .get('/api/user/6359c541ef4977bcfed1e792')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('DELETE /user/', (done) => {
        chia.request(server)
            .delete('/api/user/')
            .end((err, res) => {
                expect(res).to.have.status(409);
                expect(res.body).to.be.a('object');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });

});