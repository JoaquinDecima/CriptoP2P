import express from "express";

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
 *                  type: ENUM
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
    TransactionIntentionService.getAllTransactionIntentions()
        .then(TransactionIntention => {
            res.json(TransactionIntention);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default TransactionIntentionRouter;