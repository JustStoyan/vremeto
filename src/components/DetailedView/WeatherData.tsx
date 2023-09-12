import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

import { DetailedView } from "./DetailedView";
import { QuickView } from "../QuickView";
import { useSelector } from "react-redux";

export const WeatherData = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data, error } = useGetWeatherByCityQuery(city);

  return (
    <>
      <QuickView weatherDetails={data} />
      <DetailedView weatherDetails={data} error={error} />
    </>
  );
};
