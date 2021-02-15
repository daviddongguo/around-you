import {MailSlurp} from 'mailslurp-client';
// const { MailSlurp, InboxControllerApi } = require('mailslurp-client');
import request from 'supertest';
import {app} from '../../../app';
import {logger} from '../../../common/loaders/logger';

// const mailslurp = new MailSlurp({ apiKey: "864dfea0f9ec74ce343c0f4a4d8542bc2b110930289fb3cc3a1391abbd5eb52b" });

const path = '/api/emailsender';
let config: any;

beforeAll(() => {
	const apiKey = process.env.MAILSLURP_API_KEY;
	expect(apiKey).toBeTruthy();
	config = {apiKey};
});

it.skip('can create inboxes', async () => {
	const mailslurp = new MailSlurp(config);
	const inbox = await mailslurp.createInbox();
	expect(inbox.id).toBeTruthy();
	expect(inbox.emailAddress).toContain('@mailslurp.com');
	logger.info(inbox);
});

it.skip('my app can send emails', async () => {
	const mailslurp = new MailSlurp(config);
	const inbox = await mailslurp.createInbox();
	expect(inbox.id).toBeTruthy();
	expect(inbox.name).toBeDefined();
	expect(inbox.description).toBeDefined();
	expect(inbox.emailAddress).toBeDefined();

	// trigger an app action that sends an email
	const toEmail = inbox.emailAddress;
	const name = 'David';
	const email = 'david@email.com';
	const randomString =
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15);
	const subject = randomString;
	const message = randomString;

	const response = await request(app)
		.post(path)
		.send({name, email, subject, message, toEmail})
		.expect(200);

  expect(response.body.Messages[0].Status).toContain('success');

	// const emails = await mailslurp.getEmails(inbox.id, {
	// 	minCount: 1,
	// 	retryTimeout: 60000,
	// });
	// // assert that the correct email was sent
	// expect(emails[0].subject).toContain(randomString);
	// expect(emails[0].body).toContain(randomString);
});
