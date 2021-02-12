import express, {Request, Response} from 'express';
import {logger} from '../../common/loaders/logger';
import {Restaurant} from './restaurantService';

const router = express.Router();

router.get('/api/restaurants/top3',async (req: Request, res: Response) => {

  try{
    const results = await Restaurant.searchTop3();
		return res.status(200).send({"restaurants" : results});
  }catch(error){
    logger.error(error.message);
  }


});

export {router as indexOfRestaurants};

