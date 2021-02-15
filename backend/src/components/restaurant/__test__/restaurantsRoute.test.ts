import request from 'supertest';
import {app} from '../../../app';

const top3 = '/api/restaurants/top3';
const top20 = '/api/restaurants/top20bydistance';

it(`responds to ${top20}`, async () => {

	const response = await request(app)
		.get(top20)
		.expect(200);
  expect(response.body.restaurants.length).toEqual(3);
  expect(response.body.restaurants[0].name).not.toBeNull();
});

it(`responds to ${top3}`, async () => {

	const response = await request(app)
		.get(top3)
		.expect(200);
  expect(response.body.restaurants.length).toEqual(3);
  expect(response.body.restaurants[0].name).not.toBeNull();
});
