const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

router.get('/', getAllData);
router.get('/months', getAllMonths);
router.get('/months/:id', getSingleMonth);
router.get('/events', getAllEvents);
router.get('/events/:id', getSingleEvent);

function getAllData (req, res, next) {
  return knex('months').select().orderBy('id')
  .then((months) => {
    knex('events').select().orderByRaw('day ASC, time ASC, time ASC')
    .then((events) => {
      res.status(200).json({
        status: 'Success',
        data: {
          months: months,
          events: events
        }
      });
    });
  })
  .catch(err => next(err));
}

function getAllMonths (req, res, next) {
  return knex('months').select().orderBy('id')
  .then((months) => {
   res.status(200).json({
     status: 'success',
     data: months
   });
  })
  .catch(err => next(err));
}

function getSingleMonth (req, res, next) {
  return knex('months').select().orderBy('id')
  .then((months) => {
   res.status(200).json({
     status: 'success',
     data: months
   });
  })
  .catch(err => next(err));
}

function getAllEvents (req, res, next) {
  return knex('events').select().orderByRaw('month_id ASC, day ASC, time ASC')
  .then((events) => {
    res.status(200).json({
      status: 'success',
      data: events
    });
  })
  .catch(err => next(err));
}

function getSingleEvent (req, res, next) {
  const eventID = parseInt(req.params.id);
  return knex('events').where('id', eventID).first()
  .then((event) => {
    res.status(200).json({
      status: 'success',
      data: event
    });
  })
  .catch(err => next(err));
}

module.exports = router;
