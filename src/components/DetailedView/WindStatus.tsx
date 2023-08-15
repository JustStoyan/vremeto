import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

export const WindStatus = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);

  const windSpeed = data && data.wind.speed;
  return (
    <div>
      <div>
        {windSpeed} <sub>km/h</sub>
      </div>
    </div>
  );
};
