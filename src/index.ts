import 'express-async-errors'
import config from '../config'
import { app } from './app'
import { logger } from './common/loaders/logger'

const start = () => {
  app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`)
  })
}

start()
