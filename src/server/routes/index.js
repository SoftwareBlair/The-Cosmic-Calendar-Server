const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

// Setting route end points
router.get('/', getAllData);
router.get('/months', getAllMonths);
router.get('/months/:id', getSingleMonth);
router.get('/events', getAllEvents);
router.get('/events/:id', getSingleEvent);

/* Helper functions for routes */

// GET all data from DB
function getAllData (req, res, next) {
  return knex('months').select().orderBy('id')
  .then((months) => {
    knex('events').select().orderByRaw('month_id ASC, day ASC, time ASC')
    .then((events) => {
      res.status(200).json({
        status: 'SUCCESS',
        months: months,
        events: events
      });
    });
  })
  .catch(err => {
    res.status(400).json({
      message: 'Request Could Not Be Completed'
    });
  });
}

// GET all months
function getAllMonths (req, res, next) {
  return knex('months').select().orderBy('id')
  .then((months) => {
    res.status(200).json({
      status: 'SUCCESS',
      data: months
    });
  })
  .catch(err => {
    res.status(400).json({
      message: 'Request Could Not Be Completed'
    });
  });
}

// GET single month
function getSingleMonth (req, res, next) {
  const monthID = parseInt(req.params.id);
  return knex('months').where('id', monthID).first()
  .then((month) => {
    res.status(200).json({
      status: 'SUCCESS',
      data: month
    });
  })
  .catch(err => {
    res.status(400).json({
      message: 'Request Could Not Be Completed'
    });
  });
}

// GET all events
function getAllEvents (req, res, next) {
  return knex('events').select().orderByRaw('month_id ASC, day ASC, time ASC')
  .then((events) => {
    res.status(200).json({
      status: 'SUCCESS',
      data: events
    });
  })
  .catch(err => {
    res.status(400).json({
      message: 'Request Could Not Be Completed'
    });
  });
}

// GET single month
function getSingleEvent (req, res, next) {
  const eventID = parseInt(req.params.id);
  return knex('events').where('id', eventID).first()
  .then((event) => {
    res.status(200).json({
      status: 'SUCCESS',
      data: event
    });
  })
  .catch(err => {
    res.status(400).json({
      message: 'Request Could Not Be Completed'
    });
  });
}

module.exports = router;
