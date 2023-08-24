import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mesureIn: 'celsius',
    forcast: 'today',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        changeUnit(state, action) {
            state.mesureIn = action.payload;
        },
        changeForcastWindow(state, action) {
            state.forcast = action.payload;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
