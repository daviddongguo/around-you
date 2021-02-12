import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/api/restaurants',async (req: Request, res: Response) => {

		return res.status(200).send({"orders" : "1231s"});
});

export {router as indexOfRestaurants};

