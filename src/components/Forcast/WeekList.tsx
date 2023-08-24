import { useSelector } from "react-redux";
import { useGetForcastByCityQuery } from "../../store/fetchWeatherData";
import { WeekDayCard } from "./WeekDayCard";
import {
  iconUrlHandler,
  getCurrentDay,
  convertToHours,
  getTemperature,
  avrgTemp,
} from "../../utils";

import styles from "./WeekList.module.css";

export const WeekList = () => {
  const city = useSelector((state: any) => state.config.city);
  const mesureIn = useSelector((state: any) => state.ui.mesureIn);
  const { data } = useGetForcastByCityQuery(city);
  const list = data ? data.list : [];
  //To be moved out of the component

  const today = data && getCurrentDay(list[0].dt).slice(0, 3);
  console.log(list);

  const filteredList = list
    .map((forcastData: any) => {
      let day = getCurrentDay(forcastData.dt).slice(0, 3);

      return {
        day: day,
        minTemp: forcastData.main.temp_min,
        maxTemp: forcastData.main.temp_max,
        icon: forcastData.weather[0].icon,
      };
    })
    .filter((currentData: any) => currentData.day !== today);

  const firstDay = filteredList.splice(0, 8);
  const secondDay = filteredList.splice(0, 8);
  const thirdDay = filteredList.splice(0, 8);
  const fourthDay = filteredList.splice(0, 8);
  const fifthDay = [...filteredList];

  const weekDays = [firstDay, secondDay, thirdDay, fourthDay, fifthDay];

  const calcMinAndMaxAvrgTemp = (weekDay: Object[]) => {
    const minTemps: number[] = [];
    const maxTemps: number[] = [];
    weekDay.forEach((currentHour: any) => {
      minTemps.push(currentHour.minTemp);
      maxTemps.push(currentHour.maxTemp);
    });
    const avrgMin = avrgTemp(minTemps);
    const avrgMax = avrgTemp(maxTemps);

    return { min: avrgMin, max: avrgMax };
  };

  const tempArray = weekDays.map((currentDay) => {
    return calcMinAndMaxAvrgTemp(currentDay);
  });

  console.log(tempArray);

  //To be moved out of the component

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
