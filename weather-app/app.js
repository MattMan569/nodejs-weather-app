const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('regina', (error, data) => {
    console.error('Error', error);
    console.log('Data', data);
});

forecast(-104.6158, 50.4481, (error, data) => {
    console.error('Error', error);
    console.log('Data', data);
});
