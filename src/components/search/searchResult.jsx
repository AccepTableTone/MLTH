//react
import React from 'react';

const getTime = (direction) => {
	let tmpSeconds = 0;
	let seconds = 999999;
	let time = '0';
	let title = '';

	//can potentially have an array of directions, each with a set of predictions
	if (Array.isArray(direction)) {
		direction.map((prediction) => {
			tmpSeconds = getPredictionSeconds(prediction.prediction);
			//set the route title of this direction
			if (tmpSeconds < seconds) {
				seconds = tmpSeconds;
				title = setTitle(prediction.title);
			}
		});
	} else {
		seconds = getPredictionSeconds(direction.prediction);
		title = setTitle(direction.title);
	}

	//determine time to display
	if (seconds < 60) time = `${seconds} seconds`;
	else if (seconds === 60 || parseInt(seconds / 60, 10) === 1) time = `1 minute`;
	else time = `${parseInt(seconds / 60, 10)} minutes`;

	return (
		<div>
			<h2>{title}</h2>
			<div className="detail-text">Next vehicle should arrive in</div>
			<div className="prediction-text">{time}</div>
		</div>
	);
};

const setTitle = (title) => {
	return `Heading ${title}`;
};

const getPredictionSeconds = (prediction) => {
	//assuming the first prediction time is the shortest
	if (Array.isArray(prediction)) return parseInt(prediction[Object.keys(prediction)[0]].seconds, 10);
	else return parseInt(prediction.seconds);
};

const SearchResult = (props) => {
	return (
		<div>
			{Object.keys(props.result).length === 0 && props.result.constructor === Object ? (
				<div className="error-container">
					Sorry, we could not access the{' '}
					{props.stoptitle !== '' ? (
						`departure information for ${props.stoptitle}`
					) : (
						'request departure information'
					)}. Please try again later.
				</div>
			) : (
				<div className="results-container">{getTime(props.result)}</div>
			)}
		</div>
	);
};

export default SearchResult;
