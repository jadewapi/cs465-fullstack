const express = require('express');
const router = express.Router();

const { expressjwt } = require('express-jwt');

const auth = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    requestProperty: 'payload' // match what the tutorial uses
});

const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');


router
    .route('/trips')
    .get(tripsController.tripsList)             // Public
    .post(auth, tripsController.tripsAddTrip);  // Protected

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)       // Public
    .put(auth, tripsController.tripsUpdateTrip); // Protected


router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

module.exports = router;
