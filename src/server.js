import express from 'express';

import { environment } from './config/enviroment';

// Create Express server
const app = express();
const port = environment.PORT;

// Express configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});