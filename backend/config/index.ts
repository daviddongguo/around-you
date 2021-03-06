import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: process.env.PORT || 3001,

  google: {
    key: process.env.GOOGLE_KEY,
    nearBySearchUrl: process.env.NEAR_BY_SEARCH_URL,
    placeDetailsUrl: process.env.PLACE_DETAIL_URL,
    photoUrl: process.env.PHOTO_URL,
  },

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  company:{
    name: process.env.COMPANY_NAME,
    url: process.env.COMPANY_URL,
    email: process.env.COMPANY_EMAIL,
    location: process.env.COMPANY_LOCATION,
    slogans: [process.env.COMPANY_SLOGAN_1, process.env.COMPANY_SLOGAN_2]
  }
}
