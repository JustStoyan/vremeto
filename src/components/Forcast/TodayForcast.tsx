import { useGetForcastByCityQuery } from "../../store/fetchWeatherData";
import { useSelector } from "react-redux";
import { WeekDayCard } from "./WeekDayCard";

import styles from "./TodayForcast.module.css";

import {
  iconUrlHandler,
  getCurrentDay,
  convertToHours,
  getTemperature,
} from "../../utils";

export const TodayForcast = () => {
  const city = useSelector((state: any) => state.config.city);
  const mesureIn = useSelector((state: any) => state.ui.mesureIn);

  const { data } = useGetForcastByCityQuery(city);
  const listWithForcasts = data ? data.list : [];
  const today = data ? getCurrentDay(listWithForcasts[0].dt).slice(0, 3) : "";

  return (
    <div className={styles.wrapper}>
      {listWithForcasts.map((forcast: any) => {
        const hours = convertToHours(forcast.dt);
        const dayName = getCurrentDay(forcast.dt).slice(0, 3);
        const iconUrl = iconUrlHandler(forcast.weather[0].icon);
        const minTemp = getTemperature(forcast.main.temp_min, mesureIn);
        const maxTemp = getTemperature(forcast.main.temp_max, mesureIn);
        if (dayName === today) {
          return (
            <WeekDayCard
              key={forcast.dt}
              iconUrl={iconUrl}
              minTemp={minTemp}
              maxTemp={maxTemp}
              hours={hours}
            />
          );
        }
      })}
    </div>
  );
};
