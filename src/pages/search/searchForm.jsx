//react
import React from 'react';
//project
import { RouteSearchForm, StopIdSearchForm, SearchResult } from '../../components/search';
import Loader from '../../components/page/loader';
import * as CONSTS from '../../config/constants';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			routeTitle: '',
			isLoading: false,
			hasError: false,
			prediction: null
		};
	}

	getPredictionByRouteAndStop = (routeTag, stopTag) => {
		this.getPrediction(CONSTS.predictionByRouteTagStopTagUrl(routeTag, stopTag));
	};

	getPredictionByStop = (stopId) => {
		this.getPrediction(CONSTS.predictionByStopIdUrl(stopId));
	};

	getPrediction = async (url) => {
		//set state
		this.setState({
			isLoading: true,
			hasError: false,
			prediction: null
		});
		//request and wait for data
		let predictionData = await await fetch(url)
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				this.setState({ isLoading: false, hasError: true, prediction: null });
				return;
			});

		let predictions = null;
		let title = '';

		//if we have no predictions or if the service returned an error set state
		if (predictionData.predictions && !predictionData.Error) {
			//there are 2 ways this data can be formatted but they will both have a directions object with predictions
			//if we don't have a direction object we should still be able to get a title
			//if we have an array then it's a stop id result
			if (Array.isArray(predictionData.predictions)) {
				//can be more than one route bus hitting that stop and the first one may not have a prediction
				for (let idx = 0; idx < predictionData.predictions.length; idx += 1) {
					//do we have have a direction
					if (predictionData.predictions[Object.keys(predictionData.predictions)[idx]].direction) {
						predictions =
							predictionData.predictions[Object.keys(predictionData.predictions)[idx]].direction;
					}
				}

				if (predictions === null)
					title = predictionData.predictions[Object.keys(predictionData.predictions)[0]].stopTitle;
				else {
					title = `Heading ${predictions.title}`;
					predictions = predictions;
				}
			} else {
				if (!predictionData.predictions.direction) title = predictionData.predictions.stopTitle;
				else {
					predictions = predictionData.predictions.direction;
					title = `Heading ${predictionData.predictions.direction.title}`;
				}
			}
		}

		//reset state
		this.setState({
			isLoading: false,
			hasError: false,
			prediction: predictions === null ? {} : predictions,
			routeTitle: title
		});
	};

	render() {
		return (
			<div className="search-container">
				<h1>Next Vehicle</h1>
				<div className="summary-text">
					Quickly find information about upcoming departures for buses, streetcars, and subways by searching
					for your stop below.
				</div>
				<div>
					<StopIdSearchForm search={this.getPredictionByStop.bind(this)} />
					<div className="or-container">-- or --</div>
					<RouteSearchForm search={this.getPredictionByRouteAndStop.bind(this)} />
				</div>
				<div>
					{this.state.hasError ? (
						<div className="error-container">
							Sorry, we could complete your request. Please try again later.
						</div>
					) : this.state.prediction !== null ? (
						<SearchResult result={this.state.prediction} title={this.state.routeTitle} />
					) : this.state.isLoading ? (
						<Loader />
					) : null}
				</div>
			</div>
		);
	}
}

export default SearchForm;
