const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const rootRouter = require('./app/routes/root');


app.use('/', rootRouter);


app.listen(PORT, () => {
    console.log(`API Store connected successfully on port ${PORT}`);
}); 



