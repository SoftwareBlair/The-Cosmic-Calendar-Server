
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          title: 'Primates',
          description: 'The primate lineage is thought to go back at least 65 million years ago, even though the oldest known primates from the fossil record date ~55 million years ago',
          img_url: 'https://i.ytimg.com/vi/haxsnUs7XdA/maxresdefault.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Primate#Evolutionary_history',
          cosmic_year: 65.0,
          year_abrv: 'mya',
          day: 30,
          time: '06:25:00',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Apes',
          description: 'Apes (Hominoidea) are a branch of Old World tailless anthropoid primates native to Africa and Southeast Asia. They are the sister group of Old World monkeys, together forming the catarrhine clade',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG',
          source_url: 'https://en.wikipedia.org/wiki/Ape',
          cosmic_year: 15.0,
          year_abrv: 'mya',
          day: 31,
          time: '06:05:00',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Hominids',
          description: 'The Hominidae, whose members are known as great apes, are a taxonomic family of primates that includes seven extant species in four genera: Pongo, the orangutan; Gorilla, the gorilla; Pan, the common chimpanzee; and Homo, the human.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Ape_skeletons.png',
          source_url: 'https://en.wikipedia.org/wiki/Hominidae',
          cosmic_year: 12.3,
          year_abrv: 'mya',
          day: 31,
          time: '14:24:00',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Primitive Humans and Stone Tools',
          description: 'Homo is the genus that comprises the species Homo sapiens, which includes modern humans, as well as several extinct species classified as ancestral to or closely related to modern humans.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Homo_georgicus.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Homo',
          cosmic_year: 2.5,
          year_abrv: 'mya',
          day: 31,
          time: '22:24:00',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Domestication of Fire',
          description: 'The control of fire by early humans was a turning point in the cultural aspect of human evolution. Fire provided a source of warmth, protection, and a method for cooking food.',
          img_url: 'http://footage.framepool.com/shotimg/qf/621384381-chasseur-etre-humain-san-bochiman-feu-de-camp-grotte.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans',
          cosmic_year: 0.4,
          year_abrv: 'mya',
          day: 31,
          time: '23:44:00',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Anatomically Modern Humans',
          description: 'Anatomically modern humans evolved from archaic humans in the Middle Paleolithic, about 200,000 years ago. The emergence of anatomically modern human marks the dawn of the subspecies Homo sapiens sapiens',
          img_url: 'http://memeguy.com/photos/images/the-evolution-of-prehistoric-ape-to-man-70736.gif',
          source_url: 'https://en.wikipedia.org/wiki/Anatomically_modern_human',
          cosmic_year: 0.2,
          year_abrv: 'mya',
          day: 31,
          time: '23:52:00',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Beginning of Most Recent Glacial Period',
          description: 'The last glacial period, popularly known as the Ice Age, was the most recent glacial period, which occurred from 110,000 to 12,000 years ago.',
          img_url: 'http://static1.businessinsider.com/image/5374ba90ecad04af6c916728-480/from-cosmos-a-spacetime-odyssey-the-lost-worlds-of-planet-earth.png',
          source_url: 'https://en.wikipedia.org/wiki/Last_glacial_period',
          cosmic_year: 0.11,
          year_abrv: 'mya',
          day: 31,
          time: '23:55:00',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Sculpture and Painting',
          description: 'In the history of art, prehistoric art is all art produced in prehistorical cultures beginning somewhere in very late geological history.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Lascaux2.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Prehistoric_art',
          cosmic_year: 0.035,
          year_abrv: 'mya',
          day: 31,
          time: '23:58:00',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Agriculture',
          description: 'The Neolithic Revolution, sometimes called the Agricultural Revolution, was the wide-scale transition of many human cultures from a lifestyle of hunting and gathering to one of agriculture and settlement.',
          img_url: 'http://www.gifmania.co.uk/Plants-Animated-Gifs/Animated-Wheat/Wheat-Field-Wind-83717.gif',
          source_url: 'https://en.wikipedia.org/wiki/Neolithic_Revolution',
          cosmic_year: 0.012,
          year_abrv: 'mya',
          day: 31,
          time: '23:59:32',
          month_id: 12
        })
      ]);
    });
};
