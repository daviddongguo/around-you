import useAxios from 'axios-hooks';
import {Card, CardImg, CardImgOverlay, Col, Row} from 'reactstrap';
import config from '../config/index';

export default function Top3Show({top3url}) {
	const [{data, loading, error}] = useAxios(config.server + top3url);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const list = data.restaurants.map((r, i) => {
		const imageUrl = r.photoreference;

		return (
			<Col sm='12' md='4' key={i}>
				<div class='position-relative'>
					<Card inverse>
						<CardImg
							className='img-fluid top3_img'
							width='100%'
							src={imageUrl}
							alt=''
						></CardImg>
						<CardImgOverlay>
							<div class='card-text'>
								<div class='position-absolute bottom-0 start-0'>
									<h6> {r.name}</h6>
								</div>
							</div>
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
