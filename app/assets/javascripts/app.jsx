import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import '../stylesheets/style.scss';
import DC_Top from './DC_Top.jsx'

ReactDOM.render((
		<Router history = {browserHistory}>
			<Route path="/" component={DC_Top}/>
			<IndexRoute component={DC_Top}/>
			<Route path=":id" component={DC_Top}/>
		</Router>
), document.getElementById("app"));
