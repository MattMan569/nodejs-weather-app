const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv.slice(2).join(' ');

if (!address) {
    return console.error('No location provided!');
}

geocode(address, (error, {longitude, latitude, location}) => {
    if (error) {
        return console.error('Error', error);
    }

    forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
            return console.error('Error', error);
        }

        console.log(location);
        console.log(forecastData);
    });
});
