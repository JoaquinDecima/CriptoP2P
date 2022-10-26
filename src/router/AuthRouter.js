import express from 'express';

import UserService from '../service/UserService.js';
import TokenManager from '../tools/TokenManager.js';

const authRouter = express.Router();

/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: Login Service
 * */

/**
 * @openapi
 * /api/auth:
 *     post:
 *          description: Login user
 *          tags: [Auth]
 *          produces:
 *              - application/json
 *          parameters:
 *              - in: body
 *                name: email
 *                description: "The email of the user"
 *                required: true
 *                schema:
 *                  type: string
 *              - in: body
 *                name: password
 *                description: "The password of the user"
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: The user was successfully logged in
 *                  schema:
 *                      type: object
 *                      properties:
 *                          token:
 *                              type: string
 *              500:
 *                  description: Some server error
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 * */
authRouter.post('/', (req, res) => {
    const { email, password } = req.body;
    UserService.authUser(email, password)
        .then(user => {
            const token = TokenManager.generateToken(user);
            res.json({ token });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default authRouter;