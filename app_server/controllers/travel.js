const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

// GET travel view
const travel = async (req, res) => {
    try {
        const response = await fetch(tripsEndpoint, options);
        const json = await response.json();
        
        let message = null;
        
        if (!Array.isArray(json)) {
            message = 'API lookup error';
            return res.render('travel', {
                title: 'Travlr Getaways',
                trips: [],
                message
            });
        }
        
        if (json.length === 0) {
            message = 'No trips exist in our database!';
        }
        
        res.render('travel', {
            title: 'Travlr Getaways',
            trips: json,
            message
        });
        
    } catch (err) {
        console.error('Failed to fetch trips:', err);
        res.render('travel', {
            title: 'Travlr Getaways',
            trips: [],
            message: 'Something went wrong. Please try again later.'
        });
    }
};

module.exports = {
    travel
};
