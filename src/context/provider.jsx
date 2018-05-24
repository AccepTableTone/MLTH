//react
import React from 'react';
//project
import StateContext from '../config/constants';

const Provider = (props) => {
	props.data.history = props.history;
	return <StateContext.Provider value={props.data}>{props.children}</StateContext.Provider>;
};

export default Provider;
