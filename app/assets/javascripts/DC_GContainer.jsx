import Gcomponent from './Gcomponent.jsx'
class DC_GContainer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <h3>Column 1</h3>
                    <Gcomponent/>
                </div>
                <div className="col-md-4">
                    <h3>Column 2</h3>
                    <Gcomponent/>
                </div>
                <div className="col-md-4">
                    <h3>Column 3</h3>
                    <Gcomponent/>
                </div>
                <div className="col-md-4">
                    <h3>Column 4</h3>
                    <Gcomponent/>
                </div>
                <div className="col-md-4">
                    <h3>Column 5</h3>
                    <Gcomponent/>
                </div>
                <div className="col-md-4">
                    <h3>Column 6</h3>
                    <Gcomponent/>
                </div>
            </div>
        );
    }
}
export default DC_GContainer;
