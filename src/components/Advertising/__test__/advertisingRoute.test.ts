import request from 'supertest';
import {app} from '../../../app';

const path = '/api/advertisings';



it(`responds to ${path}`, async () => {

	const response = await request(app)
		.get(path)
		.expect(200);
  expect(response.body).not.toBeNull();
});
