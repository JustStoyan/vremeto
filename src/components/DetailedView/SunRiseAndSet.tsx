import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";
import { convertToHours } from "../../utils";
import styles from "./SunRiseAndSet.module.css";

export const SunRiseAndSet = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);

  const sunrise = data && convertToHours(data.sys.sunrise);
  const sunset = data && convertToHours(data.sys.sunset);
  return (
    <div className={styles.wrapper}>
      <div className={styles.sunrise}>
        <img src="/weathericons/sunrise.png" alt="Sunrise icon" />
        <div>{sunrise}</div>
      </div>
      <div className={styles.sunset}>
        <img src="/weathericons/sunset.png" alt="Sunset icon" />
        <div>{sunset}</div>
      </div>
    </div>
  );
};
