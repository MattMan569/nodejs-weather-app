const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv.slice(2).join(' ');

if (!address) {
    return console.error('No location provided!');
}

geocode(address, (error, geocodeData) => {
    if (error) {
        return console.error('Error', error);
    }

    forecast(geocodeData.longitude, geocodeData.latitude, (error, forecastData) => {
        if (error) {
            return console.error('Error', error);
        }

        console.log(geocodeData.location);
        console.log(forecastData);
    });
});
