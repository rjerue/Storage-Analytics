import {Button} from 'react-bootstrap';

const bStyle = {
    'marginTop': '25px'
};

class DC_GInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:  props.name.substring(1)
        }
				this.handleChange = this.handleChange.bind(this);
				this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The button was clicked.');
				console.log("hostname " + window.location.hostname)
				console.log("href " + 	window.location.href)
				window.location.href = "/" + this.state.value
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-9 col-md-offset-1">
                    <label for="usr">ServerID:</label>
                    <input type="text" className="form-control" id="svr" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div className="col-md-1">
                    <Button type="button" className="btn btn-primary" style={bStyle} onClick={this.handleClick}>OK</Button>
                </div>
            </div>
        );
    }
}
export default DC_GInput;
