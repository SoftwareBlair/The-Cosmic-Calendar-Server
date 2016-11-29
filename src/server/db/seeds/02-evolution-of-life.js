
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          title: 'First Multicellular Life',
          description: 'This is considered to be the beginning of sexual reproduction.',
          img_url: 'http://web.harran.edu.tr/assets/uploads/other/images/giphy_(7).gif',
          source_url: 'http://rstb.royalsocietypublishing.org/content/370/1684/20150036',
          cosmic_year: 0.8,
          year_abrv: 'bya',
          date: 'December 5',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Simple Animals',
          description: 'Animals are generally considered to have emerged within flagellated eukaryota. Their closest known living relatives are the choanoflagellates.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Salpingoeca_sp..jpg',
          source_url: 'https://en.wikipedia.org/wiki/Animal#Origin_and_fossil_record',
          cosmic_year: 0.67,
          year_abrv: 'bya',
          date: 'December 7',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Arthropods',
          description: 'The early ancestors of insects and arachnids; an arthropod (from Greek arthro-, joint + podos, foot) is an invertebrate animal having an exoskeleton (external skeleton), a segmented body, and jointed appendages (paired appendages).',
          img_url: 'http://www.livescience.com/images/i/000/082/483/original/kite-runner-fossil.jpg?1459798058',
          source_url: 'https://en.wikipedia.org/wiki/Arthropod',
          cosmic_year: 0.55,
          year_abrv: 'bya',
          date: 'December 14',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Fish and Proto-amphibians',
          description: 'Fish that are known only from fossil records.',
          img_url: 'http://orig01.deviantart.net/eea6/f/2013/049/7/7/halnagy_by_heliot8-d5vdyod.gif',
          source_url: 'https://en.wikipedia.org/wiki/Lists_of_prehistoric_fish',
          cosmic_year: 0.5,
          year_abrv: 'bya',
          date: 'December 17',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Land Plants',
          description: '',
          img_url: 'http://www.fossilhunters.xyz/prehistoric-earth/images/1402_15_20-club-moss-root.jpg',
          source_url: 'http://www.fossilhunters.xyz/prehistoric-earth/the-origin-and-evolution-of-land-plants.html',
          cosmic_year: 0.45,
          year_abrv: 'bya',
          date: 'December 20',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Insects and Seeds',
          description: '',
          img_url: 'http://www.avph.com.br/jpg/arthropleura1.jpg',
          source_url: 'http://listverse.com/2013/01/14/10-prehistoric-bugs-that-could-seriously-mess-you-up/',
          cosmic_year: 0.4,
          year_abrv: 'bya',
          date: 'December 21',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Amphibians',
          description: 'The first major groups of amphibians developed in the Devonian period, around 370 million years ago, from lobe-finned fish which were similar to the modern coelacanth and lungfish.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Diplocaulus_vale21DB.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Amphibian#Evolutionary_history',
          cosmic_year: 0.36,
          year_abrv: 'bya',
          date: 'December 22',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Reptiles',
          description: 'The origin of the reptiles lies about 310–320 million years ago, in the steaming swamps of the late Carboniferous period, when the first reptiles evolved from advanced reptiliomorphs.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Hylonomus_BW.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Reptile#Evolutionary_history',
          cosmic_year: 0.3,
          year_abrv: 'bya',
          date: 'December 23',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Permian-Triassic Extinction Event',
          description: '90% of Species on Earth Die Out',
          img_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--hpDuiLOP--/c_scale,fl_progressive,q_80,w_800/1440442531435645614.gif',
          source_url: 'https://en.wikipedia.org/wiki/Permian%E2%80%93Triassic_extinction_event',
          cosmic_year: 0.25,
          year_abrv: 'bya',
          date: 'December 24',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Dinosaurs',
          description: 'Dinosaurs are a diverse group of animals of the clade Dinosauria that first appeared during the Triassic period.',
          img_url: 'https://i.makeagif.com/media/4-12-2015/BCBYJM.gif',
          source_url: 'https://en.wikipedia.org/wiki/Dinosaur',
          cosmic_year: 0.23,
          year_abrv: 'bya',
          date: 'December 25',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Mammals',
          description: 'Mammals are any vertebrates within the class Mammalia, a clade of endothermic amniotes distinguished from reptiles and birds by the possession of a neocortex (a region of the brain), hair, three middle ear bones and mammary glands.',
          img_url: 'http://cdn0.dailydot.com/uploaded/images/original/2015/7/31/Prehistoric_Fridays_Episode_3_Thrinaxodon.gif',
          source_url: 'https://en.wikipedia.org/wiki/Mammal#Taxonomy_and_phylogeny',
          cosmic_year: 0.2,
          year_abrv: 'bya',
          date: 'December 26',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Birds',
          description: 'Based on fossil and biological evidence, most scientists accept that birds are a specialised subgroup of theropod dinosaurs they are members of Maniraptora, a group of theropods.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Archaeopteryx_lithographica_%28Berlin_specimen%29.jpg',
          source_url: 'https://en.wikipedia.org/wiki/Origin_of_birds',
          cosmic_year: 0.15,
          year_abrv: 'bya',
          date: 'December 27',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Flowers',
          description: 'The group originated and diversified during the Early Cretaceous and became ecologically significant thereafter.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Crossotheca_nodule.JPG',
          source_url: 'https://en.wikipedia.org/wiki/Evolutionary_history_of_plants#Flowers',
          cosmic_year: 0.13,
          year_abrv: 'bya',
          date: 'December 28',
          time: '',
          month_id: 12
        }),
        knex('events').insert({
          title: 'Cretaceous–Paleogene extinction event',
          description: 'The Cretaceous–Paleogene extinction event was a mass extinction of some three-quarters of the plant and animal species on Earth that occurred over a geologically short period of time approximately 66 million years ago',
          img_url: 'http://beforeitsnews.com/mediadrop/uploads/2015/25/0fdb130f0989cd7a5624690b185cee97b8824375.gif',
          source_url: 'https://en.wikipedia.org/wiki/Cretaceous%E2%80%93Paleogene_extinction_event',
          cosmic_year: 0.065,
          year_abrv: 'bya',
          date: 'December 30',
          time: '06:24:00',
          month_id: 12
        })
      ]);
    });
};
