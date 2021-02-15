import useAxios from 'axios-hooks';
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	CardImg,
	CardText,
	CardTitle,
	Col,
	Container,
	Row,
} from 'reactstrap';

export default function Top20Show() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/restaurants/top20bydistance'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	const list = data.restaurants.slice(0, 3).map((r) => {
		const imageUrl = r.photoreference;

		return (
			<div id='top20_card'>
				<Card>
					<Container>
						<Row>
							<Col sm={4}>
								<CardImg top width='100%' src={imageUrl} alt='Card image cap' />
							</Col>
							<Col sm={8}>
								<CardBody>
									<Row>
										<Col sm={8}>
											<Button color='danger'>
												<CardTitle tag='h5'>{r.name}</CardTitle>
											</Button>
										</Col>
										<Col></Col>
									</Row>
									<CardText>
										<p>
											<b>Description:</b> {r.description}
										</p>
										<p>
											<b>Rating:</b> {r.rating}
										</p>
										<p>
											<b>Address: </b>
											{r.address}
										</p>
										<p>
											<b>Phone Number:</b> {r.phonenumber || '---'}
										</p>
									</CardText>
								</CardBody>
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
		<div id='top3show'>
			<Row>
				<Col></Col>
				<Col sm={12}>
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
