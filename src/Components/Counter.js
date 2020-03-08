import React from 'react';
import { StoreNames } from '../Store/constants';
import { getConnected } from '../Store';

class CounterComp extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.decrement}>-</button>
                &nbsp;
                {this.props.counter}
                &nbsp;
                <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

export default getConnected(StoreNames.counter, CounterComp);