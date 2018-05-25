//react
import React from 'react';
//libraries
import FontAwesome from 'react-fontawesome';
//project
import Loader from '../../components/page/loader';
import StateContext from '../../config/constants';
import { NavLink } from 'react-router-dom';

class RouteList extends React.Component {
	//navigation func that will be set from the context using the history we passed down
	redirectToMap = null;

	renderRouteList = (routes) => {
		return (
			<div className="route-link-container">
				{routes.map((obj) => {
					return (
						<div
							className="route-link"
							key={`route${obj.tag}`}
							onClick={() => {
								this.redirectToMap(obj.tag);
							}}
						>
							{obj.title} [{obj.tag}]
							<FontAwesome name="angle-right" className="chevron-icon" />
						</div>
					);
				})}
			</div>
		);
	};

	render() {
		return (
			<div>
				<h1>Route Maps</h1>
				<StateContext.Consumer>
					{(contextState) => {
						//we are pulling history down to here using the context - we want to be able to use it
						this.redirectToMap = (stopId) => {
							window.scrollTo(0, 0);
							contextState.history.push(`/routes/${stopId}`);
						};
						//if we have the route list then show drop downs
						return contextState.routeList.length > 0 ? (
							this.renderRouteList(contextState.routeList)
						) : contextState.hasError ? (
							<div className="error-container">
								Sorry, there was an unexpected error retrieving the vehicle route list. Please try again
								later.
							</div>
						) : (
							<Loader />
						);
					}}
				</StateContext.Consumer>
			</div>
		);
	}
}

export default RouteList;
