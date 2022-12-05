import apicache from 'apicache';
import express from 'express';
// import redis from 'redis';   // For Redis Cache

import CriptoActiveService from '../service/CriptoActiveService.js';

const criptoActiveRouter = express.Router();
//const cache = apicache.options({ redisClient: redis.createClient() }).middleware;     // For Redis Cache
const cache = apicache.middleware;

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
 *          description: Get all criptoactive data
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
criptoActiveRouter.get('/', cache('10 minutes'),(req, res) => {
    CriptoActiveService.getAllCriptoActives().select('-historical')
        .then(criptoActive => {
            res.json(criptoActive);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

/** 
 * @openapi
 * /api/criptoactive/historical/:
 *      get:
 *          description: Get all criptoactive data historical
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
 criptoActiveRouter.get('/historical', cache('10 minutes'),(req, res) => {
    CriptoActiveService.getAllCriptoActivesWithHistorical()
        .then(criptoActive => {
            res.json(criptoActive);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

/** 
 * @openapi
 * /api/criptoactive/historical/{symbol}:
 *      get:
 *          description: Get criptoactive data historical by symbol
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
 criptoActiveRouter.get('/historical/:symbol', cache('10 minutes'),(req, res) => {
    CriptoActiveService.getCriptoActiveBySymbol(req.params.symbol)
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
 *          description: Get criptoactive data by symbol
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
criptoActiveRouter.get('/:symbol', cache('10 minutes'),(req, res) => {
    CriptoActiveService.getCriptoActiveBySymbol(req.params.symbol).select('-historical')
        .then(criptoActive => {
            res.json(criptoActive);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

export default criptoActiveRouter;