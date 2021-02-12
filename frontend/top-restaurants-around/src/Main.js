import React, {Component} from 'react';
import Header from './components/Header.js';

class Main extends Component {
	render() {
		return (
			<div>
				<Header />

				<div className='content'></div>
			</div>
		);
	}
}

export default Main;
