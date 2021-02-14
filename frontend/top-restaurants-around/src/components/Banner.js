import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';
import banner_bg_img from '../images/Header.png';
import place_icon from '../images/place_white.ico';

class Banner extends Component {
	render() {
		return (
			<div>
				<Card inverse className='text-center'>
					<CardImg width='100%' src={banner_bg_img} />
					<CardImgOverlay>
						<CardTitle tag='h1'>Welcome to Montreal</CardTitle>
						<CardText tag='h4'>Restaurants around Guarana's Office</CardText>
						<CardText>
							<small>
								<img id='banner_icon_img' src={place_icon} alt='place_icon' />
							</small>
						</CardText>
					</CardImgOverlay>
				</Card>
			</div>
		);
	}
}

export default Banner;
