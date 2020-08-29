import React, { Component, lazy, Suspense } from 'react';
import Link from '../components/Link.jsx';
import Background from '../components/Background.jsx';
// const BelowComponent = lazy(() => import('../components/Below.jsx'));
// const renderBelow = () => <div></div>;
class Landing extends Component {
	render() {
		return (
			<div className="container">
				<Background />
				<div className="main">
					<div className="name">
						<div>RAGHAV MATHUR</div>
					</div>
					<div className="subhead">
						<div>Frontend Developer | Designer</div>
					</div>
				</div>
				{/* <Suspense fallback={renderBelow()}>
					<BelowComponent />
				</Suspense> */}
				<Link />
			</div>
		);
	}
}

export default Landing;
