import express from 'express';

import TransactionService from '../service/TransactionService.js';

const transactionRouter = express.Router();

/**
 * @openapi
 * tags:
 *   name: Transactions
 *   description: Tansactions Service and details
 * */

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