//react
import React from 'react';
//libraries
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//project
import { Header, Footer, Menu, TwitterFeed } from './components/page';
import SiteRoutes from './config/routes';
import { getRouteList } from './redux/actions/actions';
import Provider from './context/provider';

import './styles/site.css';

class App extends React.Component {
	componentDidMount = () => {
		this.props.getRouteList();
	};

	render() {
		return (
			<div>
				<Header />
				<div className="main-container">
					<Menu />
					<TwitterFeed />
					<div className="content-container">
						<Provider data={this.props.state} history={this.props.history}>
							<SiteRoutes />
						</Provider>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state: state.Data
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getRouteList: () => {
			dispatch(getRouteList());
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
