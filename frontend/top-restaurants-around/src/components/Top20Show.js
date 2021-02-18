import useAxios from 'axios-hooks';
import {
	Button,
	Card,
	CardGroup,
	CardImg,
	CardTitle,
	Col,
	Container,
	Row,
} from 'reactstrap';
import config from '../config/index';

export default function Top20Show() {
	const [{data, loading, error}] = useAxios(
		config.server + '/api/restaurants/top20bydistance'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	const list = data.restaurants.slice(0, 3).map((restaurant, i) => {
		const imageUrl = restaurant.photoreference;

		return (
			<div id='top20_card' key={i}>
				<Card>
					<Container>
						<Row>
							<Col sm={12} md={4}>
								<CardImg
									className='img-fluid top20_img'
									src={imageUrl}
									alt='Card image cap'
								/>
							</Col>
							<Col sm={12} md={8}>
								<div className='top20-card-body'>
									<Row>
										<Col sm={12} md={8}>
											<Button color='danger'>
												<CardTitle tag='h5'>{restaurant.name}</CardTitle>
											</Button>
										</Col>
										<Col></Col>
									</Row>
									<div class='card-text'>
										<p>
											<b>Description:</b> {restaurant.description}
										</p>
										<p>
											<b>Rating:</b> {restaurant.rating}
										</p>
										<p>
											<b>Address: </b>
											{restaurant.address}
										</p>
										<p>
											<b>Phone Number:</b> {restaurant.phonenumber || '---'}
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</Card>
			</div>
		);
	});

	const title = (
		<div class='title'>
			<h2>General list of Restaurants</h2>
			<p>Sorted by distance (closest first)</p>
		</div>
	);

	return (
		<div id='top20show'>
			<Row>
				<Col></Col>
				<Col sm={12} md={10}>
					<Row>{title}</Row>
					<Row>
						<CardGroup> {list}</CardGroup>
					</Row>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
}
