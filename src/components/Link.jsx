import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Work extends Component {
	render() {
		return (
			<div className="links">
				{/* <Link to="/Projects">
							<div className="link">Projects</div>
						</Link> */}
				<Link to="/">
					<div className="link">Home</div>
				</Link>
				<Link to="/Design">
					<div className="link">Design</div>
				</Link>
				<a href="/Resume.pdf">
					<div className="link">Résumé</div>
				</a>
			</div>
		);
	}
}

export default Work;
