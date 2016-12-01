
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('months').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('months').insert({
          id: 1,
          month: 'January',
          num_days: 31,
          num_events: 3
        }),
        knex('months').insert({
          id: 2,
          month: 'February',
          num_days: 28,
          num_events: 0
        }),
        knex('months').insert({
          id: 3,
          month: 'March',
          num_days: 31,
          num_events: 1
        }),
        knex('months').insert({
          id: 4,
          month: 'April',
          num_days: 30,
          num_events: 0
        }),
        knex('months').insert({
          id: 5,
          month: 'May',
          num_days: 31,
          num_events: 1
        }),
        knex('months').insert({
          id: 6,
          month: 'June',
          num_days: 30,
          num_events: 0
        }),
        knex('months').insert({
          id: 7,
          month: 'July',
          num_days: 31,
          num_events: 0
        }),
        knex('months').insert({
          id: 8,
          month: 'August',
          num_days: 31,
          num_events: 1
        }),
        knex('months').insert({
          id: 9,
          month: 'September',
          num_days: 30,
          num_events: 4
        }),
        knex('months').insert({
          id: 10,
          month: 'October',
          num_days: 31,
          num_events: 2
        }),
        knex('months').insert({
          id: 11,
          month: 'November',
          num_days: 30,
          num_events: 1
        }),
        knex('months').insert({
          id: 12,
          month: 'December',
          num_days: 31,
          num_events: 36
        })
      ]);
    });
};
