import useAxios from 'axios-hooks';
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardSubtitle,
	CardTitle,
	Col,
	Row,
} from 'reactstrap';

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
				<Card inverse>
					<CardImg bottom width='100%' src={imageUrl} alt='' />
					<CardImgOverlay>
						<CardTitle tag='h5'>{r.name}</CardTitle>
						<CardSubtitle tag='h6' className='mb-2 text-muted'>
							{r.rating}
						</CardSubtitle>
					</CardImgOverlay>
				</Card>
			</Col>
		);
	});

	const title = (
		<div class='title'>
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
