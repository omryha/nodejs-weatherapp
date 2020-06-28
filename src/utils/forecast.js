const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=53f8f3f26cd2ebb2c0a389114093cee7&query=${latitude},${longitude}&units=m`

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `Forecast in ${body.location.name}, ${body.location.region}, ${body.location.country} is ${body.current.temperature} degrees`)
        }
    })

}

module.exports = forecast