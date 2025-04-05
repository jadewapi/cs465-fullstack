const travel = async (req, res) => {
    const tripsEndpoint = 'http://localhost:3000/api/trips';
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    
    try {
        const response = await fetch(tripsEndpoint, options);
        const trips = await response.json();
        
        res.render('travel', {
            title: 'Travlr Getaways',
            trips
        });
    } catch (err) {
        console.error('Failed to fetch trips:', err);
        
        res.render('travel', {
            title: 'Travlr Getaways',
            trips: []
        });
    }
};

module.exports = {
    travel
};
