import useAxios from 'axios-hooks';
import {Card, CardImg, CardImgOverlay, CardText, Col, Row} from 'reactstrap';

export default function Top3Show() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/restaurants/top3'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const list = data.restaurants.slice(0, 3).map((r) => {
		const imageUrl = r.photoreference;

		return (
			<Col sm={4}>
				<div class='position-relative'>
					<Card inverse>
						<CardImg bottom width='100%' src={imageUrl} alt='' />
						<CardImgOverlay>
							<CardText>
								<div class='position-absolute bottom-0 start-0'>
									<h6> {r.name}</h6>
								</div>
							</CardText>
						</CardImgOverlay>
					</Card>
				</div>
			</Col>
		);
	});

	const title = (
		<div class='title'>
			<h2>Top restaurants around</h2>
			<h5>Based on reviews</h5>
		</div>
	);
	const footer = <div class='title'>{''}</div>;

	return (
		<div id='top3'>
			<Row>
				<Col></Col>
				<Col sm={10}>
					<Row>{title}</Row>
					<Row>{list}</Row>
					<Row>{footer}</Row>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
}