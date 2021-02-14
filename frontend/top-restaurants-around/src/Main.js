import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Advertising from './components/Advertising';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Top20Show from './components/Top20Show';
import Top3Show from './components/Top3Show';

class Main extends Component {
	render() {
		return (
			<Container>
				<Banner />
				<Advertising />
				<Top3Show />
				<Top20Show />
				<Contact />
			</Container>
		);
	}
}

export default Main;
