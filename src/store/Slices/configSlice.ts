import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  city: string;
}

const initialState: ConfigState = {
  city: "",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeCityName: (state, action: PayloadAction<string>) => {
      const newCity = action.payload;
      state.city = newCity;
    },
  },
});

export const configActions = configSlice.actions;
export default configSlice.reducer;