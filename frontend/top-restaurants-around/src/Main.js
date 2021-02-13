import React, {Component} from 'react';
import Advertising from './components/Advertising.js';
import Banner from './components/Banner.js';
import Contact from './components/Contact.js';
import Top20 from './components/Top20.js';
import Top3Show from './components/Top3.js';

class Main extends Component {
	render() {
		return (
			<div>
				<Banner />
				<Advertising />
				<Top3Show />
				<Top20 />
				<Contact />

				<div className='content'></div>
			</div>
		);
	}
}

export default Main;
