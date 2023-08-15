import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

export const Humidity = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);
  const humidity = data && data.main.humidity
  return (
    <div>
      <p>
        {humidity}<sup>%</sup>
      </p>
      <div>
        <p>Normal</p>
        <p>Icon</p>
      </div>
    </div>
  );
};
