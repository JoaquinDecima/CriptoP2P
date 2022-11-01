import express from "express";

import CriptoActiveService from "../service/CriptoActiveService.js";

const criptoActiveRouter = express.Router();

/**
 * @openapi
 * tags:
 *   name: CriptoActive
 *   description: CriptoActive Data
 * */

/** 
 * @openapi
 * definitions:
 *      CriptoActive:
 *          type: object
 *          properties:
 *              symbol:
 *                  type: string
 *              price:
 *                  type: number
 *              hystrorical:
 *                  type: array
 *              updatetime:
 *                  type: date
 */

/** 
 * @openapi
 * /api/criptoactive:
 *      get:
 *          description: Get criptoactive data
 *          tags: [CriptoActive]
 *          produces:
 *              - application/json
 *          responses:
 *              200:
 *                  description: The criptoactive.
 *                  schema:
 *                      $ref: '#/definitions/CriptoActive'
 *              500:
 *                  description: Internal error
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 */
criptoActiveRouter.get('/', (req, res) => {
    CriptoActiveService.getAllCriptoActives()
        .then(criptoActive => {
            res.json(criptoActive);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

/** 
 * @openapi
 * /api/criptoactive/{symbol}:
 *      get:
 *          description: Get criptoactive data
 *          tags: [CriptoActive]
 *          produces:
 *              - application/json
 *          parameters:
 *              - in: path
 *                name: symbol
 *                description: "The symbol of the criptoactive"
 *                required: true
 *          responses:
 *              200:
 *                  description: The criptoactive.
 *                  schema:
 *                      $ref: '#/definitions/CriptoActive'
 *              500:
 *                  description: Internal error
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 */
criptoActiveRouter.get('/:symbol', (req, res) => {
    const symbol = req.params.symbol;
    CriptoActiveService.getCriptoActiveBySymbol(symbol)
        .then(criptoActive => {
            res.json(criptoActive);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default criptoActiveRouter;