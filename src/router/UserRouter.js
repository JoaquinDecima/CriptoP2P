import express from 'express';
import isAuthenticated from '../middleware/isAuth.js';

import UserService from '../service/UserService.js';

const userRouter = express.Router();

/**
 * @openapi
 * tags:
 *   name: User
 *   description: User Management
 * */

/** 
 * @openapi
 * definitions:
 *      User:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              lastname:
 *                  type: string
 *              email:
 *                  type: string
 *              addres:
 *                  type: string
 *              password:
 *                  type: string
 *              cvu:
 *                  type: string
 *              wallet:
 *                  type: string
 */

/**
 * @openapi
 * /api/user:
 *      get:
 *          description: Get all users
 *          tags: [User]
 *          produces:
 *              - application/json
 *          responses:
 *              200:
 *                  description: An array of users
 *                  schema: 
 *                     $ref: '#/definitions/User'
 * */
userRouter.get('/', (req, res) => {
    UserService.getAllUsers().select('-password -__v')
        .then(users => {
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
 *          tags: [User]
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
 *                  schema: 
 *                      $ref: '#/definitions/User'
 * 
 */

userRouter.get('/:id', (req, res) => {
    UserService.getUserById(req.params.id).select('-password -__v')
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
 *          tags: [User]
 *          produces:
 *              - application/json
 *          parameters:
 *              - in: body
 *                name: user
 *                description: The user to create.
 *                required: true
 *                schema:
 *                  $ref: '#/definitions/User'
 *          responses:
 *              200:
 *                  description: The user was successfully created
 *                  schema:
 *                      $ref: '#/definitions/User'
 *              500:
 *                  description: Some server error
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 * */

userRouter.post('/', (req, res) => {
    UserService.createUser(req.body).select('-password -__v')
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

/**
 * @openapi
 * /api/user/:
 *      delete:
 *          description: Delete an user logged
 *          tags: [User]
 *          produces:
 *              - application/json
 *          parameters:
 *              - in: header
 *                name: token
 *                description: "The token of the user"
 *                required: true
 *          responses:
 *              200:
 *                  description: The user was successfully deleted
 *                  schema:
 *                      $ref: '#/definitions/User'
 *              500:
 *                  description: Some server error
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *              401:
 *                  description: Unauthorized
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 * 
 */
userRouter.delete('/',isAuthenticated, (req, res) => {
    UserService.deleteUser(req.headers.user._id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default userRouter;