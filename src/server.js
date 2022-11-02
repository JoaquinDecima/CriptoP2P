import express from 'express';
import mongoose from 'mongoose';
import { scheduleJob } from 'node-schedule';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { environment } from './config/enviroment.js';
import { swaggerConf, swaggerConfStyle } from './config/swaggerConf.js';
import authRouter from './router/AuthRouter.js';
import criptoActiveRouter from './router/CriptoActiveRouter.js';
import transactionIntentionRouter from './router/TransactionIntentionRouter.js';
import userRouter from './router/UserRouter.js';
import CriptoManager from './tools/CriptoManager.js';

// Create Express server
const app = express();
const port = environment.PORT;

// MongoDB connection
mongoose.connect(process.env.MONGODB_HOST);

// Express configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable("x-powered-by");

// Swagger configuration
const swaggerDefinition = swaggerJSDoc(swaggerConf);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition, swaggerConfStyle));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/criptoactive', criptoActiveRouter);
app.use('/api/transactionalintention', transactionIntentionRouter);
app.use('/api/user', userRouter);

//cron job
scheduleJob('*/10 * * * *', () => {
    console.info('Updating cripto data...' + new Date());
    CriptoManager.updateCryptoData();
});

app.listen(port, () => {
    console.info(`Server started on port ${port}`);
});