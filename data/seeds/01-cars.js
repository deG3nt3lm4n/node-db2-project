
const cars = [
  {
    vin: 'JH4CC2540RC002823',
    make: 'tesla',
    model: 'model-x',
    mileage: 2150,
    title: 'clean',
    transmission: 'automatic'
  },
  {
    vin: '2T1KR32EX3C158977',
    make: 'tesla',
    model: 'model-s',
    mileage: 3150,
    title: 'clean',
  },
  {
    vin: '1GCHK29U31E237682',
    make: 'tesla',
    model: 'model-f',
    mileage: 21500,
  }
];

exports.seed = function(knex){
  return knex('cars')
    .truncate().then(() => {
      return knex('cars').insert(cars);
  });
};
