const express = require('express');
const carsRouter = require('./cars-router');

const server = express();
const port = 8000;
server.use(express.json());
server.use('/cars', carsRouter)

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'something went wrong'
    })
})

server.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})