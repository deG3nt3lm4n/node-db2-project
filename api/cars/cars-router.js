// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');
const mw = require('./cars-middleware');
const router = express.Router();


// [GET] /api/cars
router.get('/', async (req,res,next) => {
  try {
    const carsData = await Cars.getAll();
    if(!carsData){
      res.status(404).json({message: 'sorry no cars'});
    }else{
      res.status(200).json(carsData);
    }
  } catch (err) {
    next(err);
  }
});

// [GET] /api/cars/:id
router.get('/:id', mw.getById , (req,res) => {
  res.json('single car with id');
});

// [POST] /api/cars
router.get('/', mw.create , (req,res) => {
  res.json('new car created');
});

// error handling
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  });
});

module.exports = router;