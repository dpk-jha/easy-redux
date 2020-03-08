import React from 'react';

import {GetConnected} from 'easy-redux';

class App extends React.Component {

  constructor(props){
    super(props);
    console.log('App', this.props);
  }

  render(){
    return(
      <div>
        <p>{this.props.time}</p>
        <button onClick={()=>{
          this.props.setTime(new Date().getTime());
        }}>Set time</button>
      </div>
    )
  }
}

// connect component with store
export default GetConnected('timer', App);
