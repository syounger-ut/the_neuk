import React             from 'react'
import ReactDOM          from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// Redux setup
import { Provider }      from 'react-redux'
import configureStore    from './store/configureStore';
const store = configureStore({});

import App from './containers/App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
