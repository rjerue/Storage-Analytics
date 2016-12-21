import React from 'react';
import {Line} from 'react-chartjs-2';

class Gcomponent extends React.Component {
    constructor(props) {
        super(props);
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
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
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
            },
            options: {
                scales: {
                    
                }
            }
        }
    }
    render() {
        return (<Line data={this.state.data}/>);
    }
}
export default Gcomponent;
