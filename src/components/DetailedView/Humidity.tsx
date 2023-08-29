import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";
import styles from "./Humidity.module.css";

export const Humidity = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);
  const humidity = data && data.main.humidity;
  return (
    <div className={styles.wrapper}>
      <p className={styles.content}>{humidity} </p>
      <sup>%</sup>
    </div>
  );
};
