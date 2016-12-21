import React from 'react';
import {Line} from 'react-chartjs-2';

class Gcomponent extends React.Component {
    constructor(props) {
        super(props)
        var randomColorGenerator = '#' + (Math.random().toString(16) + '0000000').slice(2, 8)
        this.state = {
            data: {
                labels: props.data.map(function(x) {
                    return x.to;
                }),
                datasets: [
                    {
                        label: props.name,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: randomColorGenerator,
                        borderColor: randomColorGenerator,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: randomColorGenerator,
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: randomColorGenerator,
                        pointHoverBorderColor: randomColorGenerator,
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: props.data.map(function(x) {
                            if (x.stat == null)
                                return 0
                            else
                                return x.stat
                        })
                    }
                ]
            }
        }
    }

    render() {
        return (<Line data={this.state.data}/>);
    }
}
export default Gcomponent;
