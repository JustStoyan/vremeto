import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";
import { useGetWeatherByLocationQuery } from "../../store/fetchWeatherData";
import { useDispatch } from "react-redux";
import { configActions } from "../../store/Slices/configSlice";

import { DetailedView } from "./DetailedView";
import { QuickView } from "../QuickView";
import { useSelector } from "react-redux";

export const WeatherData = () => {
  const dispatch = useDispatch();
  const city = useSelector((state: any) => state.config.city);
  const location = useSelector((state: any) => state.config.location);
  const { ...cityData } = useGetWeatherByCityQuery(city);
  const { ...locationData } = useGetWeatherByLocationQuery(location, {
    skip: !location,
  });

  let data: any = {};

  if (location) {
    data = locationData.data;
    data && dispatch(configActions.changeCityName(data.name));
  } else {
    data = cityData.data;
  }

  return (
    <>
      <QuickView weatherDetails={data} />
      <DetailedView weatherDetails={data} />
    </>
  );
};
