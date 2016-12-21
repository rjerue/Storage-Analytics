import {Button} from 'react-bootstrap';

const bStyle = {
    'marginTop': '25px'
};



class DC_GInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-9 col-md-offset-1">
                    <label for="usr">ServerID:</label>
                    <input type="text" className="form-control" id="svr"/>
                </div>
                <div className="col-md-1">
                    <Button type="button" className="btn btn-primary" style={bStyle}>OK</Button>
                </div>
            </div>
        );
    }
}
export default DC_GInput;
