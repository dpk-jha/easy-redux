import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import { getStore } from './Store';

ReactDOM.render(<Provider store={getStore()}><App /></Provider>, document.getElementById('root'));
