const express = require('express');         // Express app
const router = express.Router();            // Router logic

// Import the controller
const tripsController = require('../controllers/trips');

// Route to get all trips
router
    .route('/trips')
    .get(tripsController.tripsList);          // GET /api/trips

// Route to get a trip by tripCode
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);    // GET /api/trips/GALR210214 (for example)

module.exports = router;
