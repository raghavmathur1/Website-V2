import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div className="design">
				<div
					className="dimage"
					style={{ background: 'url(' + this.props.imgurl + ')' }}></div>
                    <div className="overlay"></div>
                    <div className="ctext">
                        <div className="mar">{this.props.boxtext}</div>
                    </div>
			</div>
		);
	}
}

export default Card;
