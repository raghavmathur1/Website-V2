import React, { Component } from 'react';
import back from '../images/back2.svg';
class Background extends Component {
	render() {
		return <div className="heading" style={{ background: 'url(' + back + ')' }}></div>;
	}
}

export default Background;
