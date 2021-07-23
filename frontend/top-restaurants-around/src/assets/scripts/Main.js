/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Banner from './components/Banner';
import Top20Show from './components/Top20Show';
import Top3Show from './components/Top3Show';

class Main extends Component {
  render() {
    return (
      <Container>
        {/* <Test /> */}
        <Banner />
        {/* <Advertising /> */}
        <Top3Show top3url='/api/restaurants/top3' />
        <Top20Show />
        {/* <Contact /> */}
      </Container>
    );
  }
}

export default Main;
