import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

export const WeatherImage = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data, isLoading } = useGetWeatherByCityQuery(city);
  const weatherIcon = data && data.weather[0].icon;
  return (
    <div>
      <img
        src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
        alt="Weather Icon"
        width={`200`}
      />
    </div>
  );
};
