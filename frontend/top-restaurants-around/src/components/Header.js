import React, {Component} from 'react';
import headerImg from '../images/Header.png';

class Header extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to Montreal</h1>
				<p>Restaurants around Guarana's Office</p>
				<img src={headerImg} alt='' width='375px' />
			</div>
		);
	}
}

export default Header;
