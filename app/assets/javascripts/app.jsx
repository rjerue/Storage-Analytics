import React from 'react';
import ReactDOM from 'react-dom';
import Gcomponent from './Gcomponent.jsx'
import '../stylesheets/style.scss';

ReactDOM.render((
    <div>
        <h1>Playframework, React JS, ES 6 and webpack</h1>
        <h2>Tom Brady did not deflate those footballs!</h2>
				<Gcomponent/>
    </div>), document.getElementById("app"));
