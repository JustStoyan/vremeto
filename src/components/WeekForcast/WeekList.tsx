import { useSelector } from "react-redux";
import { useGetForcastByCityQuery } from "../../store/fetchWeatherData";
import { WeekDayCard } from "./WeekDayCard";
import {
  iconUrlHandler,
  getCurrentDay,
  convertToHours,
  getTemperature,
} from "../../utils";

import styles from "./WeekList.module.css";

export const WeekList = () => {
  const city = useSelector((state: any) => state.config.city);
  const mesureIn = useSelector((state: any) => state.ui.mesureIn);
  const { data } = useGetForcastByCityQuery(city);
  const list = data ? data.list : [];
  console.log(data);
  return (
    <div className={styles.wrapper}>
      {list.map((currentData: any) => {
        const hours = convertToHours(currentData.dt);
        const dayName = getCurrentDay(currentData.dt).slice(0, 3);
        const iconUrl = iconUrlHandler(currentData.weather[0].icon);
        const minTemp = getTemperature(currentData.main.temp_min, mesureIn);
        const maxTemp = getTemperature(currentData.main.temp_max, mesureIn);
        return (
          <WeekDayCard
            key={currentData.dt}
            dayName={dayName}
            iconUrl={iconUrl}
            minTemp={minTemp}
            maxTemp={maxTemp}
            hours={hours}
          />
        );
      })}
    </div>
  );
};
