const fs = require('fs');
const path = require('path');

// GET travel page
module.exports.travel = (req, res) => {
    // Build the file path to data/trips.json
    const tripsFile = path.join(__dirname, '../../data/trips.json');
    
    // Read the file synchronously (for quick prototyping)
    const trips = JSON.parse(fs.readFileSync(tripsFile, 'utf8'));
    
    // Render the 'travel' view, passing 'trips' into the template
    res.render('travel', {
        title: 'Travlr Getaways',
        trips
    });
};
