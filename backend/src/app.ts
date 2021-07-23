import { json } from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { indexOfAdvertising } from './components/Advertising/advertisingRoute';
import { indexOfEmailsender } from './components/email/emailRoute';
import { indexOfRestaurants } from './components/restaurant/restaurantRoute';

require('dotenv').config();

const app = express();
app.get('api/test', async (req, res) => {
  res.status(200).json({
    message: 'Hi, there!',
    url: `${req.url}`,
    // timestamp: moment().zone("-05:00").format('YYYY-MM-DD HH:mm'),
    success: true,
  });
});

app.enable('trust proxy');
app.use(cors());
app.use(compression());
app.use(json());
app.use(morgan('dev'));
app.use(helmet());

app.use(indexOfRestaurants);
app.use(indexOfEmailsender);
app.use(indexOfAdvertising);

export { app };
