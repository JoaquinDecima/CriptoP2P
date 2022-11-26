import express from 'express';

import TransactionService from '../service/TransactionService.js';

const transactionRouter = express.Router();

/**
 * @openapi
 * tags:
 *   name: Transactions
 *   description: Tansactions Service and details
 * */

/** 
 * @openapi
 * /api/transaction:
 *  get:
 *      summary: Get all transactions
 *      tags: [Transactions]
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 * 
 */

transactionRouter.get('/', (req, res) => {
    TransactionService.getAllTransactions()
        .then(transactions => {
            res.json(transactions);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default transactionRouter;