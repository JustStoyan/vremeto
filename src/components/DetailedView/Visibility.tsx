import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";
import styles from "./Visibility.module.css";

export const Visibility = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);
  const visability = data && data.visibility / 1000;
  return (
    <div className={styles.wrapper}>
      <p>{`${visability} km`}</p>
    </div>
  );
};
