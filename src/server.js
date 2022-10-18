import express from 'express';

// Create Express server
const app = express();

// Express configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});