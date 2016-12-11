import React from 'react';

class Greeter extends React.Component {
    render() {
        return (<p>THE TRUTH IS THAT, {this.props.name}</p>)
    }
}

export default Greeter;
