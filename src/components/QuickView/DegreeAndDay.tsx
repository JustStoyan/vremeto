import styles from "./DegreeAndDay.module.css";
import { convertToHours, getCurrentDay, getTemperature } from "../../utils";
import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

export const DegreeAndDay = () => {
  const metric = useSelector((state: any) => state.ui.mesureIn);
  const city = useSelector((state: any) => state.config.city);
  const { data, isLoading } = useGetWeatherByCityQuery(city);

  const timestamp = data && data.dt;
  const temp = data && getTemperature(data.main.temp, metric);
  const day = isLoading ? "" : getCurrentDay(timestamp);
  const hours = isLoading ? `00:00` : convertToHours(timestamp);

  return (
    <div className={styles.wrapper}>
      <p className={styles.degree}>
        {temp}
        {metric === "celsius" ? <sup>°C</sup> : <sup>°F</sup>}
      </p>
      <div className={styles["day-and-time"]}>
        <p>{day}, </p>
        <p className={styles.time}>{hours}</p>
      </div>
    </div>
  );
};
