import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/styles.css'
import Main from './Main'

if (module.hot) {
  module.hot.accept('./Main.js', () => {
    const NextRootContainer = require('./Main.js').default
    render(<NextRootContainer />, document.getElementById('react-root'))
  })
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)
