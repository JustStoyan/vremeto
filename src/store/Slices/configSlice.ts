import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  city: string;
  location: Object;
}

const initialState: ConfigState = {
  city: "Sofia",
  location: { lat: 42.16, lon: 24.72 },
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeCityName: (state, action: PayloadAction<string>) => {
      const newCity = action.payload;
      state.city = newCity;
    },
    changeLocation: (state, action) => {
      const newLocation = action.payload;
      state.location = newLocation;
    },
  },
});

export const configActions = configSlice.actions;
export default configSlice.reducer;
