//react
import React from 'react';
//libraries
import FontAwesome from 'react-fontawesome';

const Loader = () => {
	return (
		<div className="loader-container">
			<FontAwesome name="gear" className="loader-icon fa-spin" />
		</div>
	);
};

export default Loader;
