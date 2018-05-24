//react
import React from 'react';
//libraries
import { Route, Switch } from 'react-router-dom';
//project
import Home from '../pages/home';
import SearchForm from '../pages/search/searchForm';
import { RouteList, RouteMap } from '../pages/maps';

const SiteRoutes = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={SearchForm} />
				<Route exact path="/routes" component={RouteList} />
				<Route exact path="/routes/:id" component={RouteMap} />
				<Route component={Home} />
			</Switch>
		</div>
	);
};

export default SiteRoutes;
