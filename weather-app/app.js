const request = require('request');

const weatherUrl = `https://api.darksky.net/forecast/${process.env.DarkSkyApiKey}/37.8267,-122.4233?units=ca`;

request({url: weatherUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
        return;
    }

    if (response.body.error) {
        console.log('Unable to find location!');
        return;
    }

    const currently = response.body.currently;
    console.log(`${response.body.daily.data[0].summary} It is currently ${currently.temperature} degrees. There is a ${currently.precipProbability}% chance of rain.`);
});

const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MapBoxApiKey}&limit=1`;

request({url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service!');
        return;
    }

    if (response.body.features.length === 0) {
        console.log('Unable to find location! Try again with a new search term.');
        return;
    }

    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    console.log(`${latitude}\n${longitude}`);
});
