import React             from 'react'
import ReactDOM          from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Redux setup
import { Provider }      from 'react-redux'
import { createStore }   from 'redux'
import theNeukApp        from './reducers'

import App from 'App';

let store = createStore(theNeukApp)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
