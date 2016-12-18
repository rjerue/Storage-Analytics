import Gcomponent from './Gcomponent.jsx'
const cStyle = {
    'paddingBottom': '50px'
};
class DC_GContainer extends React.Component {
    render() {
        return (
            <div className="container" style={cStyle}>
                <div className="col-md-6">
                    <h3>Column 1</h3>
                    <Gcomponent/>
                </div>
                <div className="col-md-6">
                    <h3>Column 2</h3>
                    <Gcomponent/>
                </div>
                <div className="col-md-6">
                    <h3>Column 3</h3>
                    <Gcomponent/>
                </div>
                <div className="col-md-6">
                    <h3>Column 4</h3>
                    <Gcomponent/>
                </div>
                <br/>
            </div>
        );
    }
}
export default DC_GContainer;
