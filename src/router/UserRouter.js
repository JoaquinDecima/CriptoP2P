import express from 'express';

import UserService from '../service/UserService.js';

const userRouter = express.Router();

/**
 * @swagger
 * /api/user:
 *  get:
 *      description: Get all users
 *      produces:
 *      - application/json
 *      properties:
 *         - in: body
 *           name: string
 *          description: The name of the user.
 *      responses:
 *          200:
 *              description: An array of users
 *              schema:
 *              type: application/json
 * */
userRouter.get('/', (req, res) => {
    UserService.getAllUsers().then(users => {
        res.json(users);
    })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

export default userRouter;