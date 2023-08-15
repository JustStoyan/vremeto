import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeCityName: (state, action) => {
      const newCity = action.payload;
      state.city = newCity;
    },
  },
});

export const configActions = configSlice.actions;
export default configSlice.reducer;
