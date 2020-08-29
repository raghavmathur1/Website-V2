import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Projects from './pages/Projects.jsx';
import Design from './pages/Design.jsx';
const AppComponent = lazy(() => import('./App.jsx'));
ReactDOM.render(
	<Suspense fallback="">
		<Router>
			<Route exact path="/" component={AppComponent}></Route>
			<Route exact path="/Design" component={Design}></Route>
		</Router>
	</Suspense>,

	document.getElementById('root')
);
