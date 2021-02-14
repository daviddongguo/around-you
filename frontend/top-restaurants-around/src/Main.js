import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Advertising from './components/Advertising.js';
import Banner from './components/Banner.js';
import Contact from './components/Contact.js';
import Top3Show from './components/Top3.js';

class Main extends Component {
	render() {
		return (
			<Container className='content'>
				<Banner />
				<Advertising />
				<Top3Show />
				{/* <Top20 /> */}
				<Contact />
			</Container>
		);
	}
}

export default Main;
