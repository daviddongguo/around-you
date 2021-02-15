import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: process.env.PORT || 3001,

  googleKey: process.env.GOOGLE_KEY,
  googleBaseUrl: process.env.BASE_URL,
  googlePhotoUrl: process.env.PHOTO_URL,
  googlePlaceDetailsUrl: process.env.PLACE_DETAIL_URL,

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  company:{
    name: process.env.COMPANY_NAME,
    url: process.env.COMPANY_URL,
    slogans: [process.env.COMPANY_SLOGAN_1, process.env.COMPANY_SLOGAN_2],
    email: process.env.COMPANY_EMAIL,
    // email: 'david.dong.guo@gmail.com',
  }
}
