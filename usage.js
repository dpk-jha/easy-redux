// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider, GetStore } from './index';

// const store = GetStore([
//     CreateStore({
//         name: StoreNames.currentTime,
//         initialState: {
//             time: 0
//         },
//         reducers: {
//             setTime: (state, action)=>{
//                 state.time = action.payload.time;
//             }
//         }
//     })
// ])

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// export default GetConnected(StoreNames.counter, CounterComp);