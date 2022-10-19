import express from 'express';

import UserService from '../service/UserService.js';

const userRouter = express.Router();

/**
 * @openapi
 * /api/user:
 *      get:
 *          description: Get all users
 *          produces:
 *              - application/json
 *          responses:
 *              200:
 *                  description: An array of users
 *                  schema: [{ name:string, lastname:string, email:string, addres:string, password:string, cvu:string, wallet:string }]
 *                  type: application/json
 * */
userRouter.get('/', (req, res) => {
    UserService.getAllUsers().then(users => {
        res.json(users);
    })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

/**
 * @openapi
 * /api/user/{id}:
 *      get:
 *          description: Get an user by id
 *          produces:
 *              - application/json
 *          parameters:
 *              - in: path
 *                name: id
 *                description: "The id of the user"
 *                required: true
 *          responses:
 *              200:
 *                  description: An array of users
 *                  schema: [{ name:string, lastname:string, email:string, addres:string, password:string, cvu:string, wallet:string }]
 *                  type: application/json
 * 
 */

userRouter.get('/:id', (req, res) => {
    UserService.getUserById(req.params.id)
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
});

export default userRouter;