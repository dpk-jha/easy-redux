import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'; // define store
import {ConnectedComponent} from 'easy-redux'; // import
import App from './App';

// use store
ReactDOM.render(<ConnectedComponent store={store}><App /></ConnectedComponent>, document.getElementById('root'));
