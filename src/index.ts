import 'express-async-errors'
import config from '../config'
import { app } from './app'
import { logger } from './common/loaders/logger'

const start = () => {
  app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`)
  })
}

import cluster from 'cluster'

import { cpus } from 'os'
import process from 'process'
const numCPUs = cpus().length

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  start()

  console.log(`Worker ${process.pid} started`)
}
