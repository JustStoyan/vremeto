import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";
import styles from './WeatherImage.module.css';

export const WeatherImage = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);
  const weatherIcon = data && data.weather[0].icon;
  return (
    <div className={styles.wrapper}>
      <img
        src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
        alt="Weather Icon"
      />
    </div>
  );
};
