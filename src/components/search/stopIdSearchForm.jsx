//react
import React from 'react';

class StopIdSearchForm extends React.Component {
	constructor(props) {
		super(props);
		//create reference to text box so we can grab the value later
		this.stopid = React.createRef();
	}

	getByStopId = () => {
		this.props.search(this.stopid.current.value);
	};

	render() {
		return (
			<div>
				<div className="detail-text">
					You can find the unique stop number for your stop on TTC poles for streetcars or on route pages on
					ttc.ca for buses and streetcars.
				</div>
				<div>
					<label htmlFor="txtStopNumber">Stop Number</label>
					<input id="txtStopNumber" ref={this.stopid} type="text" />
					<input type="button" value="Find" onClick={this.getByStopId} className="find-button" />
				</div>
			</div>
		);
	}
}

export default StopIdSearchForm;
