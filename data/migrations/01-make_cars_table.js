// DO YOUR MAGIC
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments(); //primary key
    tbl.string('vin',17)
      .notNullable()
      .unique();
    tbl.string('make')
      .notNullable();
    tbl.string('model')
      .notNullable();
    tbl.integer('mileage')
      .unsigned()
      .notNullable();
    tbl.string('title');
    tbl.string('transmission');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};