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
            res.status(500).json({ error: err.message });
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
        res.status(500).json({ error: err.message });
    });
});


/**
 * @openapi
 * /api/user:
 *      post:
 *          description: Create a new user
 *          produces:
 *              - application/json
 *          parameters:
 *              - in: body
 *                name: user
 *                description: The user to create.
 *                required: true
 *                schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      lastname:
 *                          type: string
 *                      email:
 *                          type: string
 *                      addres:
 *                          type: string
 *                      password:
 *                          type: string
 *                      cvu:
 *                          type: string
 *                      wallet:
 *                          type: string
 *          responses:
 *              200:
 *                  description: The user was successfully created
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          lastname:
 *                              type: string
 *                          email:
 *                              type: string
 *                          addres:
 *                              type: string
 *                          password:
 *                              type: string
 *                          cvu:
 *                              type: string
 *                          wallet:
 *                              type: string
 *              500:
 *                  description: Some server error
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 * */

userRouter.post('/', (req, res) => {
    UserService.createUser(req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default userRouter;