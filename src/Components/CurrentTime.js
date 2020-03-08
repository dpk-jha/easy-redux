import React from 'react';
import { getConnected } from '../Store';
import { StoreNames } from '../Store/constants';

class TimeComp extends React.Component{

    setTime = () => {
        this.props.setTime({time:new Date().getTime()});
    }

    render(){
        return(
            <div>
                <p>{this.props.time ? new Date().toTimeString() : ''}</p>
                <button onClick={this.setTime}>Get Time</button>
            </div>
        )
    }
}

export default getConnected(StoreNames.currentTime, TimeComp);