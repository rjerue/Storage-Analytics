import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/style.scss';
import DC_Header from './DC_Header.jsx'
import DC_GInput from './DC_GInput.jsx'
import DC_GContainer from './DC_GContainer.jsx'

ReactDOM.render((
    <div>
        <DC_Header/>
				<div className="container">
					<DC_GInput/>
	        <DC_GContainer/>
				</div>
    </div>
), document.getElementById("app"));
