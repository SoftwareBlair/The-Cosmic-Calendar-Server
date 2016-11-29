
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          title: 'The Big Bang',
          description: 'The Big Bang theory is the prevailing cosmological model for the universe from the earliest known periods through its subsequent large-scale evolution.',
          img_url: 'https://66.media.tumblr.com/37fca6792310b915fa27730053d2aa07/tumblr_nqgofxwHhn1r90377o1_500.gif',
          source_url: 'https://en.wikipedia.org/wiki/Big_Bang',
          cosmic_year: 13.75,
          year_abrv: 'bya',
          date: 'January 1',
          time: '',
          month_id: 1
        }),
        knex('events').insert({
          title: 'Oldest known Gamma Ray Burst',
          description: 'A gamma-ray burst is an extremely luminous event flash of gamma rays that occurs as the result of an explosion, and is thought to be associated with the formation of a black hole.',
          img_url: 'http://www.physics.usyd.edu.au/~gekko/pinwheel/movie_11.gif',
          source_url: 'https://en.wikipedia.org/wiki/GRB_090423',
          cosmic_year: 13.10,
          year_abrv: 'bya',
          date: 'January 14',
          time: '',
          month_id: 1
        }),
        knex('events').insert({
          title: 'First Galaxies Form',
          description: 'Galaxy formation is hypothesized to occur, from structure formation theories, as a result of tiny quantum fluctuations in the aftermath of the Big Bang.',
          img_url: 'http://66.media.tumblr.com/7631958078c0a059bbac6a805fadf0e0/tumblr_n8zcbhqz8f1qio57co1_1280.gif',
          source_url: 'https://en.wikipedia.org/wiki/Galaxy_formation_and_evolution',
          cosmic_year: 12.85,
          year_abrv: 'bya',
          date: 'January 22',
          time: '',
          month_id: 1
        }),
        knex('events').insert({
          title: 'Milky Way Galaxy Begins to Form',
          description: 'The Milky Way is a barred spiral galaxy that contains our Solar System.',
          img_url: 'https://67.media.tumblr.com/2001895b14d7ce10831c9f567ed85237/tumblr_o3l5pnglks1serxj6o1_500.gif',
          source_url: 'https://en.wikipedia.org/wiki/Milky_Way',
          cosmic_year: 11.00,
          year_abrv: 'bya',
          date: 'March 16',
          time: '',
          month_id: 3
        }),
        knex('events').insert({
          title: 'Milky Way Galaxy Disk Forms',
          description: 'The Milky Way\'s thin disk is thought to extend up to ~350 parsecs (1,100 light years) in the vertical axis and contributes about 85% of the stars in the Galactic plane',
          img_url: 'http://3.bp.blogspot.com/-Y7czorI81zs/Uk4zc8Ov7iI/AAAAAAAACnQ/TZ66xQbaw1Y/s1600/Spiral_Galaxy_hd1080.gif',
          source_url: 'https://en.wikipedia.org/wiki/Thin_disk',
          cosmic_year: 8.80,
          year_abrv: 'bya',
          date: 'May 12',
          time: '',
          month_id: 5
        }),
        knex('events').insert({
          title: 'Our Sun Comes to Life',
          description: 'The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process',
          img_url: 'http://animated-sun.weebly.com/uploads/3/6/6/7/3667732/7062671_orig.gif',
          source_url: 'https://en.wikipedia.org/wiki/Sun',
          cosmic_year: 4.6,
          year_abrv: 'bya',
          date: 'August 31',
          time: '',
          month_id: 8
        }),
        knex('events').insert({
          title: 'Formation of the Solar System Begins',
          description: 'The formation of the Solar System began ~4.6 billion years ago with the gravitational collapse of a small part of a giant molecular cloud.',
          img_url: 'https://66.media.tumblr.com/8e7d8d2ba397aa2c1c3c20fba9145325/tumblr_nanc5idr1F1tuzl74o1_400.gif',
          source_url: 'https://en.wikipedia.org/wiki/Formation_and_evolution_of_the_Solar_System',
          cosmic_year: 4.57,
          year_abrv: 'bya',
          date: 'September 1',
          time: '',
          month_id: 9
        }),
        knex('events').insert({
          title: 'Formation of Earth',
          description: 'The oldest material found in the Solar System is dated to 4.5672±0.0006 billion years ago',
          img_url: 'http://pop.h-cdn.co/assets/15/44/980x551/gallery-1446048052-bennu-3-1024.gif',
          source_url: 'https://en.wikipedia.org/wiki/Earth',
          cosmic_year: 4.56,
          year_abrv: 'bya',
          date: 'September 6',
          time: '',
          month_id: 9
        }),
        knex('events').insert({
          title: 'Oldest Know Rocks on Earth',
          description: 'The oldest dated rocks on Earth, as an aggregate of minerals that have not been subsequently broken down by erosion or melted, are more than 4 billion years old, formed during the Hadean Eon of Earth\'s geological history.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/4%2C030%2C000%2C000_Years_Acasta_Gneiss.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Oldest_dated_rocks',
          cosmic_year: 4.0,
          year_abrv: 'bya',
          date: 'September 16',
          time: '',
          month_id: 9
        }),
        knex('events').insert({
          title: 'Life on Earth Begins',
          description: 'Evidence suggests that life on Earth has existed for at least 3.5 billion years, with the oldest physical traces of life dating back ~3.7 billion years',
          img_url: 'https://media.giphy.com/media/GDSy5uUNmy8fe/giphy.gif',
          source_url: 'https://en.wikipedia.org/wiki/Life#Origin',
          cosmic_year: 3.8,
          year_abrv: 'bya',
          date: 'September 21',
          time: '',
          month_id: 9
        }),
        knex('events').insert({
          title: 'Photosynthesis Begins',
          description: 'Early photosynthetic systems, such as those in green and purple sulfur and green and purple nonsulfur bacteria, are thought to have been anoxygenic, and used various other molecules as electron donors rather than water.',
          img_url: 'https://www.extremetech.com/wp-content/uploads/2013/12/green-leaves-with-sunlight-640x353.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Photosynthesis#Evolution',
          cosmic_year: 3.0,
          year_abrv: 'bya',
          date: 'October 12',
          time: '',
          month_id: 10
        }),
        knex('events').insert({
          title: 'Oxygenation of Atmosphere',
          description: 'The Great Oxygenation Event was the biologically induced appearance of dioxygen in Earth\'s atmosphere',
          img_url: 'http://static1.businessinsider.com/image/53d7e0e86da811223da608ab/hadean-earth.gif',
          source_url: 'https://en.wikipedia.org/wiki/Great_Oxygenation_Event',
          cosmic_year: 2.4,
          year_abrv: 'bya',
          date: 'October 29',
          time: '',
          month_id: 10
        }),
        knex('events').insert({
          title: 'First Complexe Cells on Earth',
          description: 'A eukaryote is any organism whose cells contain a nucleus and other organelles enclosed within membranes.',
          img_url: 'http://cdn.phys.org/newman/gfx/news/hires/2009/thenobelpriz.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Eukaryote',
          cosmic_year: 2.0,
          year_abrv: 'bya',
          date: 'November 9',
          time: '',
          month_id: 11
        })
      ]);
    });
};
