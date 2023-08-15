import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { weatherApi } from "./fetchWeatherData";
import uiSlice from "./Slices/uiSlice";
import configSlice from "./Slices/configSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [weatherApi.reducerPath]: weatherApi.reducer,
    ui: uiSlice,
    config: configSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch);
