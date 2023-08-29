import styles from "./WeatherDescription.module.css";
import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

export const WeatherDescription = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data, isLoading } = useGetWeatherByCityQuery(city);
  const weatherIcon = data && data.weather[0].icon;

  const weatherDescription =
    data && !isLoading ? data.weather[0].description : "";
  return (
    
      <div className={`${styles.wrapper}`}>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
            alt="weather icon"
          />
        </div>
        <p>{weatherDescription}</p>
      </div>
    
  );
};
