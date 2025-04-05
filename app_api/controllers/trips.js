const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();
    
    // Uncomment this if you wanna see the data in your console:
    // console.log(q);
    
    if (!q) {
        // If no data found
        return res
            .status(404)
            .json({ message: 'No trips found' });
    } else {
        // Return the trips as JSON
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList
};
