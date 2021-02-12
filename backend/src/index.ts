import {json} from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import moment from 'moment';
import morgan from 'morgan';
import config from '../config';
import {logger} from './common/loaders/logger';
import {indexOfRestaurants} from './components/restaurant/restaruantRoute';


require('dotenv').config();

const app = express();
app.get('/status', async (req, res) => {
  res.status(200).json({message: 'Hi, there!',
  url: `${req.url}`,
  timestamp: moment().zone("-05:00").format('YYYY-MM-DD HH:mm')});
});


app.enable('trust proxy');
app.use(cors());
app.use(compression());
app.use(json());
app.use(morgan('dev'));
app.use(helmet());

app.use(indexOfRestaurants);

app.listen(config.port, () => {
	logger.info(`Server running on port ${config.port}`);
});
