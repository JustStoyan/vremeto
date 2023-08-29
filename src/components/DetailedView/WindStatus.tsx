import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";
import styles from "./WindStatus.module.css";

export const WindStatus = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);

  const windSpeed = data && data.wind.speed;
  return (
    <div>
      <div className={styles["wrapper"]}>
        <span className={styles["wind-speed"]}>{windSpeed}</span>{" "}
        <sub>km/h</sub>
      </div>
    </div>
  );
};
