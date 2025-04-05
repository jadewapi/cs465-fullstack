const express = require('express');        // Express app
const router = express.Router();           // Router logic

// Import the controller
const tripsController = require('../controllers/trips');

// Define the route for the trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList);         // GET /trips will run tripsList()

module.exports = router;
