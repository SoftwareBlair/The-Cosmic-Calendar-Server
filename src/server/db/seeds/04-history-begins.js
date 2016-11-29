
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: '',
          description: '',
          img_url: '',
          source_url: '',
          cosmic_year: 0.0,
          year_abrv: 'kya',
          date: 'December 31',
          time: '',
          month_id: 12
        })
      ]);
    });
};
