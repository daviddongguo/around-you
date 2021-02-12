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

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}
