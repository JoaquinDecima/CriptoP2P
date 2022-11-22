/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';

import chaiHttp from 'chai-http';
import chia from "chai";
import { server } from '../../src/server.js';

chia.use(chaiHttp);
const expect = chia.expect

describe('CriptoActiveRouter', () => {
    it('GET /criptoactive', (done) => {
        chia.request(server)
            .get('/api/criptoactive')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /criptoactive - cached', (done) => {
        chia.request(server)
            .get('/api/criptoactive')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /criptoactive/historical', (done) => {
        chia.request(server)
            .get('/api/criptoactive/historical')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /criptoactive/historical - cached', (done) => {
        chia.request(server)
            .get('/api/criptoactive/historical')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('array');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /criptoactive/:symbol', (done) => {
        chia.request(server)
            .get('/api/criptoactive/ETHUSDT')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /criptoactive/:symbol - cached', (done) => {
        chia.request(server)
            .get('/api/criptoactive/ETHUSDT')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /criptoactive/historical/:symbol', (done) => {
        chia.request(server)
            .get('/api/criptoactive/historical/ETHUSDT')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
    it('GET /criptoactive/historical/:symbol - cached', (done) => {
        chia.request(server)
            .get('/api/criptoactive/historical/ETHUSDT')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
});