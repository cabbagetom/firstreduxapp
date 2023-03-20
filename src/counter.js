import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {

            addition: (state) => {
                state.value = 0 ? state.value = 0 :  (state.value > 0 ? state.value = (state.value * 1.05) : state.value = state.value);
            },

            charge: (state) => {
                state.value = 0 ? state.value = 0 :  (state.value > 0 ? state.value = (state.value * 0.85) : state.value = state.value);
            },

            deposit: (state, action) => {
                state.value += action.payload;
            },

            withdraw: (state, action) => {
                state.value -= action.payload;
            },
    },
});

export const {addition, charge, deposit, withdraw, resetValuetoZero} =

    counterSlice.actions;

    export default counterSlice.reducer;