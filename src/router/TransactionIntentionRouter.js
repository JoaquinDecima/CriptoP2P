import express from "express";

import isAuthenticated from "../middleware/isAuth.js";
import TransactionIntentionService from "../service/TransactionIntentionService.js";

const TransactionIntentionRouter = express.Router();

/**
 * @openapi
 * tags:
 *   name: TransactionIntention
 *   description: TransactionIntention Data
 * */

/** 
 * @openapi
 * definitions:
 *      TransactionIntention:
 *          type: object
 *          properties:
 *              user:
 *                  type: object
 *              criptoActive:
 *                  type: object
 *              nominalValue:
 *                  type: number
 *              amount:
 *                  type: number
 *              date:
 *                  type: date
 *              operation:
 *                  type: enum
 *                  enum: ['COMPRA', 'VENTA']
 */

/**
 * @openapi
 * /api/transactionintention:
 *      get:
 *          description: Get all transactionintention data
 *          tags: [TransactionIntention]
 *          produces:
 *              - application/json
 *          responses:
 *              200:
 *                  description: The transactionintention.
 *                  schema:
 *                      $ref: '#/definitions/TransactionIntention'
 *              500:
 *                  description: Internal error
 *                  schema:
 *                      type: object
 * 
 */

TransactionIntentionRouter.get('/', (req, res) => {
    TransactionIntentionService.getAllTransactionIntentions().select('-__v')
        .then(TransactionIntention => {
            res.json(TransactionIntention);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

/**
 * @openapi
 * /api/transactionintention:
 *      post:
 *          description: Add new transaction intention
 *          tags: [TransactionIntention]
 *          security:
 *             - auth: [token]
 *          produces:
 *              - application/json
 *          parameters:
 *              - in: header
 *                name: token
 *                description: "The token of the user"
 *                required: true
 *              - in: body
 *                name: nominalValue
 *                description: "The nominal value of the transaction intention"
 *                required: true
 *                schema:
 *                  type: number
 *                example: 997.99
 *              - in: body
 *                name: amount
 *                description: "The amount of the transaction intention in ARS"
 *                required: true
 *                schema:
 *                  type: number
 *                example: 1000
 *              - in: body
 *                name: operation
 *                description: "The operation of the transaction intention"
 *                required: true
 *                schema:
 *                  type: enum
 *                  enum: ['COMPRA', 'VENTA']
 *              - in: body
 *                name: criptoActive
 *                description: "The cripto active of the transaction intention"
 *                required: true
 *                schema:
 *                  type: enum
 *                  enum: ['ALICEUSDT', 'MATICUSDT', 'AXSUSDT', 'AAVEUSDT', 'ATOMUSDT', 'NEOUSDT', 'DOTUSDT', 'ETHUSDT', 'CAKEUSDT', 'BTCUSDT', 'BNBUSDT', 'ADAUSDT', 'TRXUSDT', 'AUDIOUSDT']
 *          responses:
 *              200:
 *                  description: The transactionintention.
 *                  schema:
 *                      $ref: '#/definitions/TransactionIntention'
 *              500:
 *                  description: Internal error
 *                  schema:
 *                      type: object
 *              401:
 *                  description: Unauthorized
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 * 
 */

TransactionIntentionRouter.post('/', isAuthenticated, (req, res) => {
    TransactionIntentionService.createTransactionIntention(req.body, req.headers.user)
        .then(TransactionIntention => {
            res.json(TransactionIntention);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

/**
 * @openapi
 * /api/transactionintention/{id}:
 *      get:
 *          description: Get transaction Intention by id
 *          tags: [TransactionIntention]
 *          produces:
 *              - application/json
 *          parameters:
 *              - in: path
 *                name: id
 *                description: "The id of the transaction intention"
 *                required: true
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: The transactionintention.
 *                  schema:
 *                      $ref: '#/definitions/TransactionIntention'
 *              500:
 *                  description: Internal error
 *                  schema:
 *                      type: object
 */
TransactionIntentionRouter.get('/:id', (req, res) => {
    TransactionIntentionService.getTransactionIntentionById(req.params.id)
        .then(TransactionIntention => {
            res.json(TransactionIntention);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default TransactionIntentionRouter;