const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - list all trips
const tripsList = async (req, res) => {
    const q = await Model.find({}).exec();
    if (!q) {
        return res
            .status(404)
            .json({ message: "No trips found." });
    } else {
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - get single trip by code
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .findOne({ 'code': req.params.tripCode }) // looks for the tripCode in the URL
        .exec();
    
    if (!q) {
        return res
            .status(404)
            .json({ message: `Trip with code ${req.params.tripCode} not found.` });
    } else {
        return res
            .status(200)
            .json(q);
    }
};

// Add Trip function
const tripsAddTrip = async (req, res) => {
    const g = await Trip
        .create({
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            (err, trip) => {
                if (err) {
                    return res
                        .status(400)
                        .json(err);
                } else {
                    return res
                        .status(201)
                        .json(trip);
                }
            });
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip
};
