
exports.up = function(knex, Promise) {
  return knex.schema.createTable('months', (t) => {
    t.integer('id').unique();
    t.string('month').notNullable();
    t.integer('num_days').notNullable();
    t.integer('num_events').notNullable().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('months');
};
