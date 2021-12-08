
import winston from 'winston';
import config from '../../../config';

export const logger = winston.createLogger({
	level: config.logs.level,
	format: winston.format.combine(
		// winston.format.timestamp({
		// 	format: 'YYYY-MM-DD HH:mm:ss',
		// }),
		winston.format.errors({stack: true}),
		// winston.format.label({label: '-'}),
		winston.format.colorize({all: true}),
		winston.format.splat(),
		winston.format.simple()
		// winston.format.json()
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({filename: 'error.log', level: 'error'}),
		new winston.transports.File({filename: 'combined.log'}),
	],
});
