import express, { Request, Response } from 'express'
import config from '../../config/index'

const router = express.Router()

router.get('/api/advertisings', async (req: Request, res: Response) => {
  const company = config.company
  return res.status(200).send({ company })
})

export { router as indexOfAdvertising }
