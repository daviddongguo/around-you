import axios from 'axios';
import express, {Request, Response} from 'express';
import config from '../../../config';
import {logger} from '../../common/loaders/logger';

const router = express.Router();

router.get('/api/restaurants',async (req: Request, res: Response) => {


  try{
    const response = await axios.get(config.googleBaseUrl + '&rankby=distance');
		return res.status(200).send({"token": response.data.next_page_token, "restaurants": response.data.results });
  }catch(error){
    logger.error(error.message);
    return res.status(404).send();
  }


});

export {router as indexOfRestaurants};

