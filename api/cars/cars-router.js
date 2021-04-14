const router = require('express').Router();


const Cars = require('./cars-model');
const {checkCarId,checkCarPayload,checkVinNumberUnique,checkVinNumberValid} = require('./cars-middleware');


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
router.get('/:id',checkCarId, (req,res) => {
  res.json(req.carData);
});

// [POST] /api/cars
router.post('/',checkCarPayload,checkVinNumberUnique,checkVinNumberValid, (req,res) => {
  res.json('new car created');
});

// error handling
router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  });
});

module.exports = router;