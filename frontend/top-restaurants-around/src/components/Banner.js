import useAxios from 'axios-hooks';
import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText} from 'reactstrap';
import config from '../config/index';
import banner_bg_img from '../images/Header.png';
import place_icon from '../images/place_white.ico';

export default function Banner() {
	const [{data, loading, error}] = useAxios(
		config.server + '/api/advertisings'
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const title = 'Welcome to Montreal';
	const sub_title = `Restaurants around ${data.company.name}'s Office`;
	const icon = (
		<div>
			<img
				class='img-fluid'
				id='banner_icon_img'
				src={place_icon}
				alt='place_icon'
			/>
		</div>
	);

	return (
		<div class='position-relative'>
			<Card inverse className='text-center'>
				<CardImg width='100%' src={banner_bg_img} alt='' />
				<CardImgOverlay>
					<CardText>
						<div
							id='banner'
							class='position-absolute top-50 start-50 translate-middle'
						>
							<div id='banner_title'>{title}</div>
							<div id='banner_sub_title'>{sub_title}</div>
							<div>{icon}</div>
						</div>
					</CardText>
				</CardImgOverlay>
			</Card>
		</div>
	);
}
