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
			const json = (
				await axios.get(
					config.googleBaseUrl +
						'&types=restaurant&location=45.519728,-73.5882657&rankby=distance'
				)
			).data.results;
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
		var restaurants: {
			name: string;
			photoreference: string;
			place_id: string;
			rating: string;
		}[] = [];

		try {
			//TODO sort all restaurant in 3 km not only the first 20 items
			const first = (
				await axios.get(
					config.googleBaseUrl +
						'&types=restaurant&location=45.519728,-73.5882657&radius=3000'
				)
			).data;
			var token = first.next_page_token;
			var list = first.results;

			while (first.results.length >= 20) {
				const response = (
					await axios.get(config.googleBaseUrl + '&pagetoken=' + token)
				).data;
				token = response.next_page_token;
				list = list.concat(response.results);
				if (response.results.length < 20) {
					break;
				}
			}

			logger.info(list.length);

			const jsonAsArray = Object.keys(list)
				.map(function (key) {
					return list[key];
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
