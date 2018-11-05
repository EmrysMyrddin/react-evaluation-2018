import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import registerServiceWorker from './registerServiceWorker'
import Layout from './components/Layout'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Layout} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
