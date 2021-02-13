import React, {Component} from 'react';
import banner_bg_img from '../images/Header.png';
import place_icon from '../images/place_white.ico';

class Banner extends Component {
	render() {
		return (
			<div id='banner'>
				<img id='banner_bg' src={banner_bg_img} alt='background_picture'></img>

				<span id='banner_name'> Welcome to Montreal </span>
				<span id='banner_slogan'>Restaurants around Guarana's Office</span>
				<span id='banner_icon'>
					<img id='banner_icon_img' src={place_icon} alt='place_icon' />
				</span>
			</div>
		);
	}
}

export default Banner;
