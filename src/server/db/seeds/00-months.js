
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('months').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('months').insert({
          id: 1,
          name: 'January',
          num_days: 31,
          num_events: 3
        }),
        knex('months').insert({
          id: 2,
          name: 'February',
          num_days: 28,
          num_events: 0
        }),
        knex('months').insert({
          id: 3,
          name: 'March',
          num_days: 31,
          num_events: 1
        }),
        knex('months').insert({
          id: 4,
          name: 'April',
          num_days: 30,
          num_events: 0
        }),
        knex('months').insert({
          id: 5,
          name: 'May',
          num_days: 31,
          num_events: 1
        }),
        knex('months').insert({
          id: 6,
          name: 'June',
          num_days: 30,
          num_events: 0
        }),
        knex('months').insert({
          id: 7,
          name: 'July',
          num_days: 31,
          num_events: 0
        }),
        knex('months').insert({
          id: 8,
          name: 'August',
          num_days: 31,
          num_events: 1
        }),
        knex('months').insert({
          id: 9,
          name: 'September',
          num_days: 30,
          num_events: 4
        }),
        knex('months').insert({
          id: 10,
          name: 'October',
          num_days: 31,
          num_events: 2
        }),
        knex('months').insert({
          id: 11,
          name: 'November',
          num_days: 30,
          num_events: 1
        }),
        knex('months').insert({
          id: 12,
          name: 'December',
          num_days: 31,
          num_events: 36
        })
      ]);
    });
};
