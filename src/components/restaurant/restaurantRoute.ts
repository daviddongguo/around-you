import express, { Request, Response } from 'express'
import { top20Mock, top3Mock } from './mock'

const router = express.Router()

router.get('/api/restaurants/top3', async (req: Request, res: Response) => {
  // const results = await Restaurant.searchTop3();
  const results = top3Mock
  return res.status(200).send({ restaurants: results })
})

router.get(
  '/api/restaurants/top20bydistance',
  async (req: Request, res: Response) => {
    // const results = await Restaurant.searchByDistance();
    const results = top20Mock
    return res.status(200).send({ restaurants: results })
  },
)

export { router as indexOfRestaurants }
