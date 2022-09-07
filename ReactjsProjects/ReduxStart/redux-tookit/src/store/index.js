import { configureStore } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

const initialState={counter:0, showCounter:true}

const counterSlice=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter=state.counter + action.amount;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
});

const store =configureStore({
    //for many reducer:{counter:counterSlice.reducer}
    //for one
    reducer:counterSlice.reducer
});
export const counterActions=counterSlice.actions

export default store;