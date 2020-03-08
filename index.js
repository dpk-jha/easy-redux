import { combineReducers } from "redux";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { connect } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

let storeSlices = {
    // currentTime: createSlice({
    //     name: StoreNames.currentTime,
    //     initialState: {
    //         time: 0
    //     },
    //     reducers: {
    //         setTime: (state, action)=>{
    //             state.time = action.payload.time;
    //         }
    //     }
    // })
};


const getPreparedSlices = () => {
    const sliceObj  = {};
    for (const s in storeSlices){
        sliceObj[s] = storeSlices[s].reducer
    }
    return sliceObj;
}

const getConnected = (slicerName, component) => {
    const stateToProps = (state) => {
        return state[storeSlices[slicerName].name];
    };
    console.log('getConnected', storeSlices);
    return connect(stateToProps, {...storeSlices[slicerName].actions})(component);
}

const getStore = (slicerArr) => {
    slicerArr.forEach((sliceObj)=> {
        storeSlices[sliceObj.name] = createSlice(sliceObj);
    });
    return configureStore({
        reducer: combineReducers(getPreparedSlices())
    });
}

export const GetConnected = getConnected;
export const GetStore = getStore;
export const ConnectedComponent = Provider;
export const CreateStore = createSlice;