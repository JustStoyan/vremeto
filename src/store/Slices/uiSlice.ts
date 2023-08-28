import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    mesureIn: 'celsius' | 'fahrenheit'; 
    forcast: 'today' | 'tomorrow'; 
}

const initialState: UiState = {
    mesureIn: 'celsius',
    forcast: 'today',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        changeUnit(state, action: PayloadAction<'celsius' | 'fahrenheit'>) {
            state.mesureIn = action.payload;
        },
        changeForcastWindow(state, action: PayloadAction<'today' | 'tomorrow'>) {
            state.forcast = action.payload;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;