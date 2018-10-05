import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

// import App from './App'
ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<Route path="/" component={ Layout } />
		</BrowserRouter>
	</Provider>,
	document.getElementById( 'root' ),
)
registerServiceWorker()
