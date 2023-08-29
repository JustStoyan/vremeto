import { useSelector } from "react-redux";
import { useGetForcastByCityQuery } from "../../store/fetchWeatherData";
import { WeekDayCard } from "./WeekDayCard";
import { iconUrlHandler, getCurrentDay, getTemperature } from "../../utils";

import styles from "./WeekList.module.css";

export const WeekList = () => {
  const city = useSelector((state: any) => state.config.city);
  const mesureIn = useSelector((state: any) => state.ui.mesureIn);
  const { data } = useGetForcastByCityQuery(city);
  const list = data ? data.list : [];
  //To be moved out of the component

  const weekDays: any = [];
  let today = "";

  list.forEach((result: any) => {
    let currentDayData = {
      day: getCurrentDay(result.dt).slice(0, 3),
      minTemp: result.main.temp_min,
      maxTemp: result.main.temp_max,
      icon: result.weather[0].icon,
    };

    if (today !== currentDayData.day) {
      weekDays.push(currentDayData);
      today = currentDayData.day;
    }
  });

  //To be moved out of the component

  return (
    <div className={styles.wrapper}>
      {weekDays.map((currentData: any) => {
        const dayName = currentData.day;
        const iconUrl = iconUrlHandler(currentData.icon);
        const minTemp = getTemperature(currentData.minTemp, mesureIn);
        const maxTemp = getTemperature(currentData.maxTemp, mesureIn);
        return (
          <WeekDayCard
            key={currentData.dt}
            dayName={dayName}
            iconUrl={iconUrl}
            minTemp={minTemp}
            maxTemp={maxTemp}
          />
        );
      })}
    </div>
  );
};
