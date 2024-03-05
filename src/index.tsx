import React             from 'react'
import { BrowserRouter } from 'react-router-dom'
import {createRoot} from "react-dom/client";

// Redux setup
import { Provider }      from 'react-redux'
import configureStore    from './store/configureStore';

import App from './containers/App';

const store = configureStore({});

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
