import {GetStore} from 'easy-redux';

//define all store
export const store = [
    {
        name: 'timer',
        initialState: {
            time: 0
        },
        reducers: {
            setTime: (state, action)=>{
                state.time = action.payload;
            }
        }
    }
]

// import store
export default GetStore(store);