import React from 'react';
import Counter from './Components/Counter';
import CurrentTime from './Components/CurrentTime';

class App extends React.Component {

  render(){
    return (
      <div>
        <Counter />
        <CurrentTime />
      </div>
    );
  }
}

export default App;
