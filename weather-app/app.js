const request = require('request');

const url = `https://api.darksky.net/forecast/${process.env.DarkSkyApiKey}/37.8267,-122.4233?units=ca`;

request({url: url, json: true}, (error, response) => {
    const currently = response.body.currently;
    console.log(`${response.body.daily.data[0].summary} It is currently ${currently.temperature} degrees. There is a ${currently.precipProbability}% chance of rain.`);
});
