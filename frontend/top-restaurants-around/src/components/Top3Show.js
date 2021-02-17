import useAxios from 'axios-hooks';
import {StyleSheet} from 'react-native';
import {Card, CardImg, CardImgOverlay, CardText, Col, Row} from 'reactstrap';
import config from '../config/index';

export default function Top3Show() {
	const [{data, loading, error}] = useAxios(
		config.server + '/api/restaurants/top3'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const styles = StyleSheet.create({
		stretch: {
			width: 260,
			height: 162,
			resizeMode: 'center',
		},
	});

	// const displayAnImageWithStyle = (url) => {
	// 	return (
	// 		<View style={styles.container}>
	// 			<Image style={styles.stretch} source={url} />
	// 		</View>
	// 	);
	// };

	const list = data.restaurants.slice(0, 3).map((r) => {
		const imageUrl = r.photoreference;

		return (
			<Col sm='12' md='4'>
				<div class='position-relative'>
					<Card inverse>
						<CardImg
							className='img-fluid top3_img'
							width='100%'
							src={imageUrl}
							alt=''
						></CardImg>
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
