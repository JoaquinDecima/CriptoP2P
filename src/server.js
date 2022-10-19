import express from 'express';
import mongoose from 'mongoose';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { environment } from './config/enviroment.js';
import { swaggerConf } from './config/swaggerConf.js';
import userRouter from './router/UserRouter.js';

// Create Express server
const app = express();
const port = environment.PORT;

// MongoDB connection
mongoose.connect(process.env.MONGODB_HOST);

// Express configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Swagger configuration
const swaggerDefinition = swaggerJSDoc(swaggerConf);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

// Routes
app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});