//react
import React from 'react';

export const apiBaseUrl = 'http://webservices.nextbus.com/service/publicJSONFeed?a=ttc';

export const ACTIONTYPE_ISLOADING = 'isloading';
export const ACTIONTYPE_HASERROR = 'haserror';
export const ACTIONTYPE_HAVEROUTELIST = 'haveroutelist';

//create context so we can get state data anywhere
const StateContext = React.createContext({});
export default StateContext;

//end point for route list
export const routeListUrl = () => {
	return `${apiBaseUrl}&command=routeList`;
};
//end point for next vehicle prediction by stop id
export const predictionByStopIdUrl = (stopId) => {
	return `${apiBaseUrl}&command=predictions&stopId=${stopId}`;
};
//end point for route stops list
export const routeStopListUrl = (routeTag) => {
	return `${apiBaseUrl}&command=routeConfig&r=${routeTag}`;
};
//end point for route stops list
export const predictionByRouteTagStopTagUrl = (routeTag, stopTag) => {
	return `${apiBaseUrl}&command=predictions&r=${routeTag}&s=${stopTag}`;
};
