const express = require('express');           // Express app
const router = express.Router();              // Router logic

// Import the controller that will handle the logic
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)             // GET method: list all trips
    .post(tripsController.tripsAddTrip);        // POST method: add a new trip

// Define route to get trip by tripCode
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);      // GET method: single trip by code

module.exports = router;
