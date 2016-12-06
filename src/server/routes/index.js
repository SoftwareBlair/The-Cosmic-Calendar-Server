const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

// Setting route end points
router.get('/', getAllData);
router.get('/months', getAllMonths);
router.get('/months/:id', getSingleMonth);
router.get('/events', getAllEvents);
router.get('/events/:id', getSingleEvent);
router.get('/events/month/:id', getMonthEvent);

/* Helper functions for routes */

// GET all data joined from DB
function getAllData (req, res, next) {
  return knex('months')
  .join('events', 'months.id', 'events.month_id')
  .orderByRaw('events.month_id ASC, events.day ASC, events.time ASC ')
  .then((allData) => {
    res.status(200).json({
      status: 'All Data Returned',
      data: allData
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
  return knex('months').orderBy('id')
  .then((months) => {
    res.status(200).json({
      status: 'All Months Returned',
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
  return knex('months').where('id', monthID)
  .then((month) => {
    res.status(200).json({
      status: 'Single Month Returned',
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
  return knex('events').orderByRaw('month_id ASC, day ASC, time ASC')
  .then((events) => {
    res.status(200).json({
      status: 'All Events Returned',
      data: events
    });
  })
  .catch(err => {
    res.status(400).json({
      message: 'Request Could Not Be Completed'
    });
  });
}

// GET events by month
function getMonthEvent (req, res, next) {
  const monthID = parseInt(req.params.id);
  return knex('events').where('month_id', monthID)
  .then((events) => {
    res.status(200).json({
      status: 'All Events Returned',
      data: events
    });
  })
  .catch(err => {
    res.status(400).json({
      message: 'Request Could Not Be Completed'
    });
  });
}

// GET single event
function getSingleEvent (req, res, next) {
  const eventID = parseInt(req.params.id);
  return knex('events').where('id', eventID)
  .then((event) => {
    res.status(200).json({
      status: 'Single Event Returned',
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
