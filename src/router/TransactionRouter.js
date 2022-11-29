import express from 'express';

import isAuthenticated from '../middleware/isAuth.js';
import TransactionIntentionService from '../service/TransactionIntentionService.js';
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
    TransactionService.getAllTransactionsActives()
        .then(transactions => {
            res.json(transactions);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

/** 
 * @openapi
 * /api/transaction/{idIntention}:
 *  post:
 *      summary: Concret a transaction
 *      tags: [Transactions]
 *      security:
 *          - auth: [token]
 *      parameters:
 *          - in: header
 *            name: token
 *            description: "The token of the user"
 *            required: true
 *          - in: path
 *            name: idIntention
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the transaction intention
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 *          401:
 *              description: Unauthorized
*/  

transactionRouter.post('/concret/:idIntention', isAuthenticated, (req, res) => {
    TransactionService.concretTransaction(req.params.idIntention, req.headers.user)
        .then(async (transaction) => {
            await TransactionIntentionService.deleteTransactionIntentionByIdNotVerify(req.params.idIntention);
            res.json(transaction);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

/** 
 * @openapi
 * /api/transaction/advance/{idTransaction}:
 *  post:
 *      summary: Advance the state of a transaction
 *      tags: [Transactions]
 *      security:
 *          - auth: [token]
 *      parameters:
 *          - in: header
 *            name: token
 *            description: "The token of the user"
 *            required: true
 *          - in: path
 *            name: idTransaction
 *            schema:
 *              type: string
 *            required: true
 *            description: The id of the transaction
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server Error
 *          401:
 *              description: Unauthorized
 */

transactionRouter.post('/advance/:idTransaction', isAuthenticated, (req, res) => {
    TransactionService.advanceState(req.headers.user, req.params.idTransaction)
        .then(transaction => {
            res.json(transaction);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default transactionRouter;