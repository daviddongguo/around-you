import React from 'react';
import ReactDOM from 'react-dom';
import Main from './assets/scripts/Main';
import './assets/styles/styles.css';

// if (module.hot) {
//   module.hot.accept('./assets/scripts/Main', () => {
//     ReactDOM.render(
//       <React.StrictMode>
//         <Main />
//       </React.StrictMode>,
//       document.getElementById('root'),
//     );
//   });
// }

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);
