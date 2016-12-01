
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          title: 'End of Last Ice Age',
          description: 'Holocene glacial retreat had a profound effect on landscapes in many areas that were covered by ice at the Last Glacial Maximum. Many places in the Northern Hemisphere are littered with deposits from this period.',
          img_url: 'http://i.kinja-img.com/gawker-media/image/upload/t_original/bhqduw77foz5efvsqcwa.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Holocene_glacial_retreat',
          cosmic_year: 12.0,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:33',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Copper Age (Chalcolithic)',
          description: 'The Copper Age was a period in the development of human technology, preceding the Bronze Age, before it was discovered that adding tin to copper formed the harder bronze.',
          img_url: 'https://legionofhonor.famsf.org/files/styles/exhibition_main/public/exhibitions/masters.jpg?itok=USDvirSJ',
          source_url: 'https://en.wikipedia.org/wiki/Chalcolithic',
          cosmic_year: 6.0,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:46',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Early Bronze Age, Proto-writing',
          description: 'In Ancient Egypt the Bronze Age begins in the Protodynastic period, c. 3150 BC. The archaic early Bronze Age of Egypt, known as the Early Dynastic Period of Egypt.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Elam_cool.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Bronze_Age#Age_sub-divisions',
          cosmic_year: 5.5,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:47',
          month_id: 12
        }),
        knex('events').insert({
          title: 'First Dynasty of Egypt, Early Dynastic Period in Sumer',
          description: '',
          img_url: 'http://blogs.nature.com/houseofwisdom/files/2013/09/Pharoanic-drawing-copyright-GOODSHOOT.jpg',
          source_url: 'https://en.wikipedia.org/wiki/First_Dynasty_of_Egypt',
          cosmic_year: 5.0,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:48',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Alphabet, Akkadian Empire, Wheel',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Ba%60alat.png',
          source_url: '',
          cosmic_year: 4.5,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:49',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Code of Hammurabi, Middle Kingdom of Egypt',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Code-de-Hammurabi-1.jpg',
          source_url: '',
          cosmic_year: 5.0,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:51',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Late Bronze Age to Early Iron Age',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Nofretete_Neues_Museum.jpg',
          source_url: '',
          cosmic_year: 3.5,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:52',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Iron Age; Beginning of Classical Antiquity',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Parthenon_from_west.jpg',
          source_url: '',
          cosmic_year: 3.0,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:53',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Buddha, Confucius, Qin Dynasty, Classical Greece, Euclidean geometry, Archimedean Physics, Roman Republic',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg',
          source_url: '',
          cosmic_year: 2.5,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:54',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Ptolemaic astronomy, Roman Empire, Christ, Invention of Numeral 0',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Statue-Augustus.jpg',
          source_url: '',
          cosmic_year: 2.0,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:55',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Muhammad, Maya civilization, Song Dynasty, Rise of Byzantine Empire',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Chichen_Itza_3.jpg',
          source_url: '',
          cosmic_year: 1.5,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:56',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Mongol Empire, Maratha Empire, Crusades, Christopher Columbus Voyages to the Americas, Renaissance in Europe, Classical Music to the Time of Johann Sebastian Bach',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Mongol_Empire_map.gif',
          source_url: '',
          cosmic_year: 1.0,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:58',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Modern History; the last 437.5 years before present.',
          description: '',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Waldseemuller_map_2.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Modern_history',
          cosmic_year: 0.5,
          year_abrv: 'kya',
          day: 31,
          time: '23:59:59',
          month_id: 12
        })
      ]);
    });
};
