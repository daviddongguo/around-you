import express, {Request, Response} from 'express';
import {body} from 'express-validator';
import {logger} from '../../common/loaders/logger';

const router = express.Router();

router.post('/api/emailsender',
[
  body('email').trim().isEmail().withMessage('Email must be valid.'),
  body('subject')
			.trim()
			.isLength({min: 1, max: 100})
			.withMessage('subject must be between 3 and 100 characters'),
  body('message')
          .trim()
          .isLength({min: 10, max: 1000})
          .withMessage('message must be between 10 and 1000 characters'),
],
async(req: Request, res: Response) => {
  const {name, email, subject, message} = req.body;

	// send email
	const mailjet = require('node-mailjet').connect(
		'aebc03f5af0232f5e9bcdb7ddf6095fb',
		'85be983aa2b2e17ace7cc30ee0868e72'
	);
	const request = mailjet.post('send', {version: 'v3.1'}).request({
		Messages: [
			{
				From: {
					Email: 'davidwu2021@protonmail.com',
					Name: 'David',
				},
				To: [
					{
						Email: "david.dong.guo@gmail.com",
						Name: name,
					},
				],
				Subject: subject + " from " + email,
				TextPart: message,
			},
		],
	});
	request
		.then(function (result: {body: any}) {
			logger.info(result.body);
			// email sent
			return res.status(200).send(result.body);
		})
		.catch(function (err: {statusCode: any}) {
			logger.error(err.statusCode);
			return res.status(500).send('Oops..');
		});
});

export {router as indexOfEmailsender};
