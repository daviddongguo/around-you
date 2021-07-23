import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Main from './assets/scripts/Main';
import './assets/styles/styles.css';

if (module.hot) {
  module.hot.accept('./assets/scripts/Main', () => {
    const NextRootContainer = require('./assets/scripts/Main.js').default;
    render(<NextRootContainer />, document.getElementById('react-root'));
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);
