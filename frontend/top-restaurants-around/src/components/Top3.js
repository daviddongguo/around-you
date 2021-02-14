import useAxios from 'axios-hooks';
import {Card, Col, Row} from 'reactstrap';

export default function Top3() {
	const [{data, loading, error}] = useAxios(
		'http://localhost:3003/api/restaurants/top3'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const list = data.restaurants.slice(0, 3).map((r) => {
		const imageUrl =
			'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyB2pcmC0RETrG_mCDbSlf58Zz6AWdtsvW0&maxwidth=400&photoreference=' +
			r.photoreference;

		return (
			<Col sm={4}>
				<Card>
					<img src={imageUrl} alt='' width='100%' />
					<p>{r.name}</p>
					<p>{r.rating}</p>
				</Card>
			</Col>
		);
	});

	const title = (
		<div>
			<h2>Top restaurants around</h2>
			<p>Based on reviews</p>
		</div>
	);

	return (
		<div id='top3'>
			<Row>
				<Col></Col>
				<Col sm={10}>
					<Row>{title}</Row>
					<Row>{list}</Row>
				</Col>
				<Col></Col>
			</Row>
		</div>
	);
}
