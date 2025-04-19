const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');
const User = mongoose.model('users'); // Needed for getUser()

// GET: /trips - list all trips
const tripsList = async (req, res) => {
    const q = await Model.find({}).exec();
    if (!q) {
        return res.status(404).json({ message: "No trips found." });
    } else {
        return res.status(200).json(q);
    }
};

// GET: /trips/:tripCode - get single trip by code
const tripsFindByCode = async (req, res) => {
    const q = await Model.findOne({ 'code': req.params.tripCode }).exec();
    if (!q) {
        return res.status(404).json({ message: `Trip with code ${req.params.tripCode} not found.` });
    } else {
        return res.status(200).json(q);
    }
};

// POST: /trips - Add a new Trip
const tripsAddTrip = async (req, res) => {
    getUser(req, res, async (req, res) => {
        try {
            const trip = await Trip.create({
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            });
            return res.status(201).json(trip);
        } catch (err) {
            return res.status(400).json(err);
        }
    });
};

// PUT: /trips/:tripCode - Update existing Trip
const tripsUpdateTrip = async (req, res) => {
    getUser(req, res, async (req, res) => {
        try {
            const trip = await Trip.findOneAndUpdate(
                { 'code': req.params.tripCode },
                {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                },
                { new: true }
            ).exec();
            
            if (!trip) {
                return res.status(404).send({
                    message: "Trip not found with code " + req.params.tripCode
                });
            }
            return res.status(200).json(trip);
        } catch (err) {
            return res.status(500).json({ message: "Server error", error: err });
        }
    });
};

// getUser() - Extract user info from JWT payload
const getUser = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        User.findOne({ email: req.payload.email })
            .exec()
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                } else {
                    callback(req, res, user.name);
                }
            })
            .catch(err => {
                console.error("Error looking up user:", err);
                return res.status(404).json(err);
            });
    } else {
        return res.status(401).json({ message: "User not found in payload" });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};