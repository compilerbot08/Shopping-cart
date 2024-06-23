import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}
export const CounterSlice =  CounterSlice({
    name : "counter",
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})
export const {increment, decrement} = CounterSlice.action;
export default CounterSlice.reducer;