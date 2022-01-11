import winston from 'winston'
import config from '../../config'
import fs from 'fs'
import path from 'path'

const logDir = 'log'
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

export const logger = winston.createLogger({
  level: config.logs.level,
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.colorize({ all: true })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error'
    }),
    new winston.transports.File({ filename: path.join(logDir, 'combined.log') })
  ]
})
