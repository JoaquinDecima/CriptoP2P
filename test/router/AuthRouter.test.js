/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';

import chaiHttp from 'chai-http';
import chia from "chai";
import { server } from '../../src/server.js';

chia.use(chaiHttp);
const expect = chia.expect

describe('AuthRouter', () => {
    it('POST /auth', (done) => {
        chia.request(server)
            .post('/api/auth')
            .send({ email: 'prueba@emial.com', password: '123456' })
            .end((err, res) => {
                expect(res).to.have.status(500);
                expect(res.body).to.be.a('object');
                expect(res).to.be.json;
                expect(err).to.be.null;
                done();
            });
    });
});