import React , {Component} from 'react';
import './trafficlight.css';
import classNames from 'classname';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
    render () 
    {
        return (
            <div className="trafficlight">
                <div className={classNames('bulb','red',{active: this.props.currentColor === RED})}/>
                <div className={classNames('bulb','yellow',{active: this.props.currentColor === YELLOW})}/>
                <div className={classNames('bulb','green',{active: this.props.currentColor === GREEN})}/>
            </div>
        );
    };
}

export default TrafficLight;