import express from 'express';

import UserService from '../service/UserService.js';

const userRouter = express.Router();

/**
 * @swagger
 * /user:
 *  get:
 *     description: Get all users
 *    produces:
 *     - application/json
 *   responses:
 *    200:
 *    description: An array of users
 *   schema:
 *   $ref: '#/definitions/User'
 * definitions:
 * User:
 * type: object
 * properties:
 * name:
 * type: string
 * lastname:
 * type: string
 * email:
 * type: string
 * addres:
 * type: string
 * cvu:
 * type: string
 * wallet:
 * type: string
 * required:
 * - name
 * - lastname
 * - email
 * - addres
 * - cvu
 * - wallet
 * */
userRouter.get('/', (req, res) => {
    UserService.getAllUsers().then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).json({error: err});
    });
});

export default userRouter;