import { json } from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { indexOfAdvertising } from './components/Advertising/advertisingRoute'
import { indexOfRestaurants } from './components/restaurant/restaurantRoute'

require('dotenv').config()

const app = express()
app.get('/api/ping', async (req, res) => {
  res.status(200).json({
    message: 'success',
    success: true,
    url: `${req.url}`
  })
})

app.enable('trust proxy')
app.use(cors())
app.use(compression())
app.use(json())
app.use(morgan('dev'))
app.use(helmet())

app.use(indexOfRestaurants)
app.use(indexOfAdvertising)

export { app }