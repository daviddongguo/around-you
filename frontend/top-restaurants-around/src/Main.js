import React, {Component} from 'react';
import Contact from './components/Contact.js';
import Header from './components/Header.js';
import Top20 from './components/Top20.js';
import Top3Show from './components/Top3.js';

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<Top3Show />
				<Top20 />
				<Contact />

				<div className='content'></div>
			</div>
		);
	}
}

export default Main;
