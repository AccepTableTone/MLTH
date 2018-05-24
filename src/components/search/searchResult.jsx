//react
import React from 'react';

const getTime = (prediction) => {
	let mins = prediction[Object.keys(prediction)[0]].minutes;
	if (mins === '0') return `${prediction[Object.keys(prediction)[0]].seconds} seconds`;
	else if (mins === '1') return `${mins} minute`;
	else return `${mins} minutes`;
};

const SearchResult = (props) => {
	return (
		<div>
			{Object.keys(props.result).length === 0 && props.result.constructor === Object ? (
				<div className="error-container">Sorry, we could complete your request. Please try again later.</div>
			) : (
				<div className="results-container">
					<div>
						<h2>{props.title}</h2>
						<div className="detail-text">Next vehicle should arrive in</div>
						<div className="prediction-text">{getTime(props.result.prediction)}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchResult;
