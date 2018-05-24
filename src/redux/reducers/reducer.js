import * as CONSTS from '../../config/constants';
import initialstate from '../../config/initialstate';

export default function(state = initialstate, action) {
	switch (action.type) {
		case CONSTS.ACTIONTYPE_ISLOADING:
			return {
				...state,
				isLoading: true,
				hasError: false,
				routeList: []
			};
		case CONSTS.ACTIONTYPE_HASERROR:
			return {
				...state,
				isLoading: false,
				hasError: true,
				routeList: []
			};
		case CONSTS.ACTIONTYPE_HAVEROUTELIST:
			return {
				...state,
				isLoading: false,
				hasError: false,
				routeList: action.routes
			};
		default:
			return state;
	}
}
