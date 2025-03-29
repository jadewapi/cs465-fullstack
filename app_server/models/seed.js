// Bring in the DB connection and the Trip schema
const mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from JSON file
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Delete all existing records, then insert new ones
const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log("Database seeded successfully!");
    } catch (err) {
        console.error("Error seeding database:", err);
    }
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
    await mongoose.connection.close();
    console.log("MongoDB disconnected");
    process.exit(0);
});
