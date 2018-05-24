//react
import React from 'react';
//libraries
import FontAwesome from 'react-fontawesome';

const RouteList = (props) => {
	let routeTag = props.match.params.id;
	//ttc names the images with a 3 charater route number - so we'll pad with zeroes
	let imgUrl = `http://www.ttc.ca/images/Route_maps/${routeTag.length === 1
		? '00'
		: routeTag.length === 2 ? '0' : ''}${routeTag}map.gif`;

	return (
		<div>
			<h1>
				Route Map<span className="back-link">
					<a href="javascript:history.back()">
						<FontAwesome name="angle-left" /> back
					</a>
				</span>
			</h1>
			<div className="map-container">
				<img src={imgUrl} />
			</div>
		</div>
	);
};

export default RouteList;
