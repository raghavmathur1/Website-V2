import React, { Component } from 'react';
import './../App.css';
import Background from '../components/Background.jsx';
import Link from '../components/Link.jsx';
import CardsDesign from '../components/CardsDesign.jsx';
class Design extends Component {
	render() {
		return (
			<div className="container">
				<Background />
				<div className="main2">
					<div className="margins">
						<div className="pheads">Design</div>
						<div className="psubheads">Take a look at my creations.</div>
						<CardsDesign />
					</div>
				</div>
				<Link />
			</div>
		);
	}
}

export default Design;
