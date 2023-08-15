import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mesureIn: "celsius",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeUnit(state, action) {
      state.mesureIn = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
