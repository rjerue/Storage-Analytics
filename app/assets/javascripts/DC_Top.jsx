import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/style.scss';
import DC_Header from './DC_Header.jsx'
import DC_GInput from './DC_GInput.jsx'
import DC_GContainer from './DC_GContainer.jsx'


class DC_Top extends React.Component {
    constructor(props) {
        super(props)
        var data = this.getData()
        this.state = {
            sdata: {
                data1: data.map(function(tdata) {
                    return {systemID: tdata.systemID, from: tdata.from, to: tdata.to, stat: tdata.portWriteAvgIOSizeKB}
                }),
                data2: data.map(function(tdata) {
                    return {systemID: tdata.systemID, from: tdata.from, to: tdata.to, stat: tdata.cpuLatestTotalAvgPct}
                }),
                data3: data.map(function(tdata) {
                    return {systemID: tdata.systemID, from: tdata.from, to: tdata.to, stat: tdata.portReadAvgIOSizeKB}
                }),
                data4: data.map(function(tdata) {
                    return {systemID: tdata.systemID, from: tdata.from, to: tdata.to, stat: tdata.portTotalBandwidthMBPS}
                })
            },
						pathname: (this.props.location.pathname == "/") ? "/10" : this.props.location.pathname
        }
    }

    getData() {
				let path = (this.props.location.pathname == "/") ? "/10" : this.props.location.pathname
        var name = 'nope';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/getData' + path, false);
        xhr.send(null);
        if (xhr.status === 200) {
						let DataO = JSON.parse(xhr.responseText)
            console.log(DataO);
            return DataO;
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
            return 'yolo';
        }
    }

    render() {return (
            <div>
                <DC_Header/>
                <div className="container">
                    <DC_GInput name={this.state.pathname}/>
									</div>
                    <DC_GContainer data={this.state.sdata}/>
            </div>
        );
    }
}
export default DC_Top;
