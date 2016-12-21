import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/style.scss';
import DC_Header from './DC_Header.jsx'
import DC_GInput from './DC_GInput.jsx'
import DC_GContainer from './DC_GContainer.jsx'

class DC_Top extends React.Component {

    //Example of a working xhr thing. It's sync, which is ehhh, but it works. Goal is to make it work for a json file later and somewhere else.
    getName() {
        var name = 'nope';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/test', false);
        xhr.send(null);
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            return xhr.responseText;
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
            return 'yolo';
        }
    }

    render() {
        return (
            <div>
                <DC_Header/>
                <div className="container">
                    <DC_GInput/>
                    <DC_GContainer/>
                </div>
            </div>
        );
    }
}
export default DC_Top;
