// code away!

const express = require('express');

const userRouter = require('./users/userRouter');


const server = express();

server.use('/', userRouter);

server.listen(8000, () => console.log('API running on port 8000'));