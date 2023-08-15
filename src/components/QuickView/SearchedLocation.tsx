import styles from "./SearchedLocation.module.css";
import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

export const SearchedLocation = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);
  const cityName = data && data.name;
  const country = data && data.sys.country;
  return (
    <div className={styles.wrapper}>
      <div className={styles.location}>
        <h3 className={styles.name}>{`${cityName}, ${country}`}</h3>
      </div>
    </div>
  );
};
