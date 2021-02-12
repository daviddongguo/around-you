import express, {Request, Response} from 'express';
import config from '../../../config';

const router = express.Router();

router.get('/api/restaurants',async (req: Request, res: Response) => {

		return res.status(200).send({"key" : config.googleKey});

});

export {router as indexOfRestaurants};

