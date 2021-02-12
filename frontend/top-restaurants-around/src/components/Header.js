import React, {Component} from 'react';
import headerImg from '../images/Header.png';

class Header extends Component {
	render() {
		return (
			<div>
				<h1>Top restaurants around</h1>
				<p>Based on reviews</p>
				<img src={headerImg} alt='' width='375px' />
			</div>
		);
	}
}

export default Header;
