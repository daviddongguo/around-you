"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var envFound = dotenv_1["default"].config();
if (envFound.error) {
    // This error should crash whole process
    console.error("⚠️  Couldn't find .env file  ⚠️");
}
exports["default"] = {
    port: process.env.PORT || 3003,
    google: {
        // key: process.env.GOOGLE_KEY,
        nearBySearchUrl: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=" + process.env.GOOGLE_KEY,
        placeDetailsUrl: "https://maps.googleapis.com/maps/api/place/details/json?&key=" + process.env.GOOGLE_KEY,
        photoUrl: "https://maps.googleapis.com/maps/api/place/photo?key=" + process.env.GOOGLE_KEY
    },
    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },
    company: {
        name: process.env.COMPANY_NAME,
        location: process.env.COMPANY_LOCATION,
        url: process.env.COMPANY_URL,
        email: process.env.COMPANY_EMAIL,
        slogans: [process.env.COMPANY_SLOGAN_1, process.env.COMPANY_SLOGAN_2]
    }
};
