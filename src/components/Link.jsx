import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Work extends Component {
	render() {
		return (
			<div className="links">
				{/* <Link to="/Projects">
							<div className="link">Projects</div>
						</Link> */}
				
				{/* <Link to="/Design">
					<div className="link">Design</div>
				</Link> */}
				<a href="/Resume.pdf">
					<div className="link">Résumé</div>
				</a>
				<a href="https://www.behance.net/raghavmathur2">
					<div className="link">Design</div>
				</a>
				<a href="https://github.com/raghavmathur1">
					<div className="link">Projects</div>
				</a>
				<a href="https://www.codechef.com/users/vahgar1">
					<div className="link">Codechef</div>
				</a>
				{/* <Link to="/n">
					<div className="link">Home</div>
				</Link> */}
			</div>
		);
	}
}

export default Work;
