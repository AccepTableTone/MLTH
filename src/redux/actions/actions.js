import * as CONSTS from '../../config/constants';

export const getRouteList = () => {
	return (dispatch) => {
		//dispatch loading state
		dispatch(isLoading(true));
		fetch(CONSTS.routeListUrl())
			.then((response) => {
				//check if http request is ok
				if (!response.ok) dispatch(hasError(true));

				//if no error then proceed
				return response;
			})
			.then((response) => response.json())
			.then((response) => {
				//dispatch route data
				let routeList = mapRoutes(response.route);
				dispatch(haveRoutes(routeList));
			})
			.catch((err) => {
				//dipatch error state
				dispatch(hasError(true));
			});
	};
};

//reformat the route data so title and tag are separate
const mapRoutes = (routes) => {
	let newRoutes = [];
	routes.map((route) => {
		newRoutes.push({
			tag: route.tag,
			title: reformatRouteTitle(route)
		});
	});

	newRoutes.sort((a, b) => {
		return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
	});

	return newRoutes;
};
//remove route tag and dash from title
const reformatRouteTitle = (route) => {
	return route.title.replace(route.tag, '').replace('-', '');
};

//are we loading
function isLoading(bool) {
	return {
		type: CONSTS.ACTIONTYPE_ISLOADING,
		bool: true
	};
}
//was there an error
function hasError(bool) {
	return {
		type: CONSTS.ACTIONTYPE_HASERROR,
		bool: true
	};
}
//have the route list
function haveRoutes(routes) {
	return {
		type: CONSTS.ACTIONTYPE_HAVEROUTELIST,
		routes
	};
}
