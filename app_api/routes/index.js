const express = require('express');           // Express app
const router = express.Router();              // Router logic


// Import the controllers
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)             // GET method: list all trips
    .post(tripsController.tripsAddTrip);        // POST method: add a new trip

// Define route to get or update trip by tripCode
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)       // GET method: single trip by code
    .put(tripsController.tripsUpdateTrip);      // PUT method: update a trip by code

// Auth routes
router
    .route('/login')
    .post((req, res, next) => {
        console.log('✅ /api/login route was hit');
        next();
    }, authController.login);


router
    .route('/register')
    .post(authController.register);

module.exports = router;
