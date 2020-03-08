import { createSlice } from "@reduxjs/toolkit";
import { StoreNames } from "./constants";

export const storeSlices = {
    counter: createSlice({
        name: StoreNames.counter,
        initialState: {
            counter: 0
        },
        reducers: {
            increment: (state)=>{
                state.counter++;
            },
            decrement: (state)=>{
                state.counter--;
            },
        }
    }),
    currentTime: createSlice({
        name: StoreNames.currentTime,
        initialState: {
            time: 0
        },
        reducers: {
            setTime: (state, action)=>{
                state.time = action.payload.time;
            }
        }
    })
}
