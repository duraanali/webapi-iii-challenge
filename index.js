// code away!

const express = require('express');

const port = 8000;

const userRouter = require('./users/userRouter');
const server = require('./server');

server.use('/', userRouter);

server.listen(8000, () => console.log(`API running on port ${port}`));