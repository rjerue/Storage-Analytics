import Gcomponent from './Gcomponent.jsx'
const cStyle = {
    'padding': '100px',
		'height': '800px'
};

class DC_GContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row" style={cStyle}>
                <div className="col-md-6">
                    <h3>portWriteAvgIOSizeKB</h3>
                    <Gcomponent name={"portWriteAvgIOSizeKB"} data={this.props.data.data1}/>
                </div>
                <div className="col-md-6">
                    <h3>cpuLatestTotalAvgPct</h3>
                    <Gcomponent name={"cpuLatestTotalAvgPct"} data={this.props.data.data2}/>
                </div>
                <div className="col-md-6">
                    <h3>portReadAvgIOSizeKB</h3>
                    <Gcomponent name={"portReadAvgIOSizeKB"} data={this.props.data.data3}/>
                </div>
                <div className="col-md-6">
                    <h3>portTotalBandwidthMBPS</h3>
                    <Gcomponent name={"portTotalBandwidthMBPS"} data={this.props.data.data4}/>
                </div>
                <br/>
            </div>
        );
    }
}
export default DC_GContainer;
