import {combineReducers } from "redux";
import {configureStore} from '@reduxjs/toolkit';
import { connect } from "react-redux";
import { storeSlices } from "./slices";

const getPreparedSlices = () => {
    const sliceObj  = {};
    for (const s in storeSlices){
        sliceObj[s] = storeSlices[s].reducer
    }
    return sliceObj;
}

export const getConnected = (slicerName, component) => {
    const stateToProps = (state) => {
        return state[storeSlices[slicerName].name];
    };
    return connect(stateToProps, {...storeSlices[slicerName].actions})(component);
}

export const getStore = () => {
    return configureStore({
        reducer: combineReducers(getPreparedSlices())
    });
}