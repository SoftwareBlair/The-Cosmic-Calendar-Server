
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (t) => {
    t.increments();
    t.string('title').notNullable();
    t.string('description').notNullable().defaultTo('');
    t.string('img_url').notNullable().defaultTo('');
    t.string('source_url').notNullable().defaultTo('');
    t.float('cosmic_year').notNullable();
    t.string('year_abrv').notNullable();
    t.string('date', 60).notNullable();
    t.string('time').notNullable().defaultTo('00:00:00');
    t.integer('month_id').notNullable().references('id').inTable('months');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
