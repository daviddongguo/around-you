import request from 'supertest';
import {app} from '../../../app';
import {logger} from '../../../common/loaders/logger';

const path = '/api/advertisings';



it(`responds to ${path}`, async () => {

	const response = await request(app)
		.get(path)
		.expect(200);
  logger.info(response.body);
  expect(response.body).not.toBeNull();
});
