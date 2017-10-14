import React             from 'react'
import ReactDOM          from 'react-dom'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import App from 'App'

ReactDOM.render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById('app')
);
