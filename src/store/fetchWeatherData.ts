import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi: any = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (cityName) =>
        `weather?q=${cityName}&appid=3f5fc19a68de4cf17e31617a6c9348a0&units=metric`,
    }),
    getForcastByCity: builder.query({
      query: (cityName) =>
        `forecast?q=${cityName}&units=metric&appid=3f5fc19a68de4cf17e31617a6c9348a0`,
    }),
  }),
});

export const { useGetWeatherByCityQuery, useGetForcastByCityQuery } =
  weatherApi;
