// DO YOUR MAGIC
const express = require('express');
const router = express.Router();


// [GET] /api/cars
router.get('/', (req,res) => {
  res.json('all the cars');
});

// [GET] /api/cars/:id
router.get('/:id', (req,res) => {
  res.json('single car with id');
});

// [POST] /api/cars
router.get('/', (req,res) => {
  res.json('new car created');
});

// error handling
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  });
});

module.exports = router;