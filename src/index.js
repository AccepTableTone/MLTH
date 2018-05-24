//react
import React from 'react';
import ReactDOM from 'react-dom';
//libraries
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
//project
import configureStore from './config/configureStore';
import App from './app';
import './styles/site.css';

//project - layout
import Footer from './components/page/footer';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
