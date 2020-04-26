const express = require('express');
const db = require('./data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const cars = await db('cars')
        res.json(cars);
    } catch(err) {
        next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const car = await db('cars').where({ id: req.params.id }).first()
        res.json(car);
    } catch(err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try{
        const [id] = await db('cars').insert(req.body);
        const newCar = await db('cars').where({ id })
        res.status(201).json(newCar);
    } catch(err) {
        next(err);
    }
})

module.exports = router;