const axios = require('axios');
const HttpError = require('../models/http-error');

// const API_KEY = 'AIzaSyATChnwiGDz9tHX0QaAmc4D3Eh5LebKM7M';
const API_KEY = process.env.GOOGLE_MAP_API_KEY;

async function getCoordsForAddress(address) {

    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);

    const data = response.data;

    if(!data || data.status === 'ZERO_RESULTS'){
        const error = new HttpError(`Could not find location for the specific address `,422);
        throw error;
    }
   
    const coordinates = data.results[0].geometry.location;  //.geometry.location
    
    return coordinates;
}

module.exports = getCoordsForAddress;