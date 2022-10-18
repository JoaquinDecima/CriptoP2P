import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { environment } from './config/enviroment';
import { swaggerConf } from './config/swaggerConf';

// Create Express server
const app = express();
const port = environment.PORT;

// Express configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Swagger configuration
const swaggerDefinition = swaggerJSDoc(swaggerConf);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});