const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoib21yeWhhIiwiYSI6ImNrYm00MDJlOTFlMWYyc215MTJwYnUwN3QifQ.ClmW8Rg3FYe1sVXHuPRFKA&limit=1`
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            //(error,data)
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            //(error,data)
            callback('Unable to find location', undefined)
        } else {
            //(error,data)
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode