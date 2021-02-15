import express, {Request, Response} from 'express';
import {Restaurant} from './restaurantService';

const router = express.Router();

router.get('/api/restaurants/top3',async (req: Request, res: Response) => {
    const results = await Restaurant.searchTop3();
		return res.status(200).send({"restaurants" : results});
});

router.get('/api/restaurants/top20bydistance',async (req: Request, res: Response) => {
  const results = await Restaurant.searchByDistance();
  return res.status(200).send({"restaurants" : results});
});

export {router as indexOfRestaurants};

