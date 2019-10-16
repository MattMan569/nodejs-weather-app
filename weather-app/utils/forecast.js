const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/${process.env.DarkSkyApiKey}/${latitude},${longitude}?units=ca`;

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather sevice!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined,
                `${response.body.daily.data[0].summary}` +
                ` It is currently ${response.body.currently.temperature}°C` +
                ` with a ${response.body.currently.precipProbability}% chance of rain`);
        }
    });
};

module.exports = forecast;
