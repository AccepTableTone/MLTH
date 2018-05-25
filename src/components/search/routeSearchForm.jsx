//react
import React from 'react';
//project
import Loader from '../../components/page/loader';
import StateContext from '../../config/constants';
import * as CONSTS from '../../config/constants';

class RouteSearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			routeTag: 0,
			routeTitle: '',
			isLoading: false,
			hasError: false,
			directions: [],
			stops: []
		};
	}

	//holder for the route list;
	routeList = [];

	//build route list
	buildRouteList = (routes) => {
		this.routeList = routes;
		return (
			<select onChange={this.getRouteStops}>
				<option value="-1" key="0">
					-- Select --
				</option>
				{routes.map((obj, idx) => {
					return (
						<option value={idx} key={obj.tag}>
							{obj.title} [{obj.tag}]
						</option>
					);
				})}
			</select>
		);
	};

	//build direction based stop lists for route
	buildDirectionLists = () => {
		let directions = [];
		let stops = [];
		let arTmp = [];
		return (
			//map through each of the direction datasets
			this.state.directions.map((direction) => {
				//create array of direction stop tags for filtering
				arTmp = direction.stop.map((d) => d.tag);
				//get the list of stops for this one directions
				stops = this.state.stops.filter((stop) => {
					//check if route stop is in this direction
					return arTmp.indexOf(stop.tag) > -1;
				});

				return (
					<div key={`dir${direction.name}`}>
						<label
							htmFor={`routeStops${direction.name}`}
						>{`${direction.name}bound Stops to ${direction.title.split('towards')[1]}`}</label>
						<select onChange={this.getNextVehiclePrediction} id={`routeStops${direction.name}`}>
							<option value="-1" key="0">
								-- Select --
							</option>

							{stops.map((obj) => {
								return (
									<option value={obj.tag} key={obj.tag}>
										{obj.title}
									</option>
								);
							})}
						</select>
					</div>
				);
			})
		);
	};

	//get route stop data from api
	getRouteStops = async (event) => {
		if (event.target.value === '-1')
			this.setState({
				directions: [],
				stops: [],
				routeTag: 0,
				routeTitle: ''
			});
		else {
			//we are passing the index around so we can get the route object
			let route = this.routeList[parseInt(event.target.value, 10)];
			if (route !== null) {
				//set state
				this.setState({
					routeTag: route.tag,
					routeTitle: route.title,
					isLoading: true,
					hasError: false,
					directions: [],
					stops: []
				});
				//request and wait for data
				let stopData = await await fetch(CONSTS.routeStopListUrl(route.tag))
					.then((res) => {
						return res.json();
					})
					.catch((err) => {
						this.setState({ isLoading: false, hasError: true, directions: [], stops: [] });
					});

				//reset state
				if (!this.state.hasError)
					this.setState({
						isLoading: false,
						hasError: false,
						directions: stopData.route.direction,
						stops: stopData.route.stop
					});
			}
		}
	};

	getNextVehiclePrediction = (event) => {
		this.props.search(this.state.routeTag, event.target.value);
	};

	//render initial list of bus routes
	renderRouteSearchForm = (routes) => {
		return (
			<div>
				<div>
					<label htmFor="routeList">Routes</label>
					{this.buildRouteList(routes)}
				</div>
				{this.state.stops.length > 0 ? (
					<div>{this.buildDirectionLists()}</div>
				) : this.state.isLoading ? (
					<Loader />
				) : null}
			</div>
		);
	};

	render() {
		return (
			<div>
				<div className="detail-text">Find your stop by browsing through the following route list.</div>
				<StateContext.Consumer>
					{(contextState) => {
						//if we have the route list then show drop downs
						return contextState.routeList.length > 0 ? (
							this.renderRouteSearchForm(contextState.routeList)
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

export default RouteSearchForm;
