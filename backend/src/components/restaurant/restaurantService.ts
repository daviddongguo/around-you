import axios from 'axios';
import config from '../../../config';
import {logger} from '../../common/loaders/logger';

export class Restaurant {
	static async searchByDistance() {
		try {
			var restaurants: {
				place_id: string;
				name: string;
				photoreference: string;
				description: string;
				rating: string;
				address: string;
				phonenumber: string;
			}[] = [];
			const json = (await axios.get(config.googleBaseUrl + '&rankby=distance'))
				.data.results;
			const jsonAsArray = Object.keys(json).map(function (key) {
				return json[key];
			});

			jsonAsArray.forEach(async (item) => {
				var phonenumber = '';

				// phonenumber = detials.data.result.formatted_phone_number || '';

				var description = '';

				var photoreference = item.photos[0].photo_reference || '';

				restaurants.push({
					place_id: item.place_id,
					name: item.name,
					photoreference,
					rating: item.rating,
					address: item.vicinity,
					phonenumber,
					description,
				});
			});

			for (var i = 0; i < restaurants.length; i++) {
				const result = await axios.get(
					config.googlePlaceDetailsUrl +
						'&fields=name,rating,formatted_phone_number,reviews&place_id=' +
						restaurants[i].place_id
				);
				restaurants[i].phonenumber = result.data.result.formatted_phone_number;

				if (result.data.result.reviews) {
					const reviews = result.data.result.reviews;
					const reviewsArray = Object.keys(reviews).map(function (key) {
						return reviews[key];
					});

					for (var j = 0; j < reviewsArray.length; j++) {
						if (
							reviewsArray[j] &&
							reviewsArray[j].rating >= 4 &&
							reviewsArray[j].text
						) {
							restaurants[i].description = reviewsArray[j].text.substr(0, 200);
							logger.info(i + ' : ' + restaurants[i].description);
							break;
						}
					}
				}
			}

			return restaurants;
		} catch (error) {
			logger.error(error.message);
		}
	}

	static async searchTop3() {
		try {
			var restaurants: {
				name: string;
				photoreference: string;
				place_id: string;
				rating: string;
			}[] = [];
			//TODO sort all restaurant in 3 km not only the first 20 items
			const json = (await axios.get(config.googleBaseUrl + '&radius=3000')).data
				.results;
			const jsonAsArray = Object.keys(json)
				.map(function (key) {
					return json[key];
				})
				.sort(function (itemA, itemB) {
					return itemB.rating - itemA.rating;
				})
				.slice(0, 3);

			jsonAsArray.forEach(async (item) => {
				var photoreference;
				if (item.photos) {
					photoreference = item.photos[0].photo_reference;
				}

				restaurants.push({
					name: item.name,
					photoreference,
					place_id: item.place_id,
					rating: item.rating,
				});
			});

			return restaurants;
		} catch (error) {
			logger.error(error.message);
		}
	}
}
