//react
import React from 'react';
//libraries
import FontAwesome from 'react-fontawesome';
import * as CONSTS from '../../config/constants';

class Header extends React.Component {
	constructor(props) {
		super(props);
		//store the preferred text size in state
		this.state = {
			largeFont: false
		};
	}

	render() {
		return (
			<div className="header-container">
				<div className="ie-logo">
					<img src="http://ibwsurveyors.com/wp-content/uploads/ttc.png" className="logo-image" />
					{this.state.largeFont ? <link rel="stylesheet" type="text/css" href="/font-large.css" /> : null}
				</div>
				<div className="ie-txt">
					<div
						className="text-size-container"
						onClick={() => {
							console.log('changing');
							this.setState({ largeFont: !this.state.largeFont });
						}}
					>
						<FontAwesome name="font" className="large-font-icon" />
						<FontAwesome name="font" className="small-font-icon" />
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
