import React, { Component } from 'react';
class Work extends Component {
	render() {
		return (
			<div className="workback">
				<div
					className="workimage"
					style={{ background: 'url(' + this.props.imgurl + ')' }}></div>
				<div className="worktext"></div>
			</div>
		);
	}
}

export default Work;
