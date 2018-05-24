//react
import React from 'react';
//libraries
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<div className="menu-container">
			<div className="menu-link vehicle-div">
				<NavLink to="/" className="menu-text">
					<img src="http://www.ttc.ca/images/fixedImages/ttc-local-nav-buses.gif" /> <span>Next Vehicle</span>
				</NavLink>
			</div>
			<div className="menu-link route-div">
				<NavLink to="/routes" className="menu-text">
					<img src="http://www.ttc.ca/images/fixedImages/ttc-local-nav-maps.gif" /> <span>Route Maps</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Menu;
