import { useSelector } from "react-redux";
import { WeekDayCard } from "./WeekDayCard";
import {
  iconUrlHandler,
  createUniqeDaysData,
  getTemperature,
} from "../../utils";

import styles from "./WeekForcast.module.css";

export const WeekForcast = ({ forcastDetails }: any) => {
  const mesureIn = useSelector((state: any) => state.ui.mesureIn);
  const list = forcastDetails ? forcastDetails.list : [];
  const weekDays = createUniqeDaysData(list);
  return (
    <div className={styles.wrapper}>
      {weekDays.map((currentData: any) => {
        const dayName = currentData.day;
        const iconUrl = iconUrlHandler(currentData.icon);
        const minTemp = getTemperature(currentData.minTemp, mesureIn);
        const maxTemp = getTemperature(currentData.maxTemp, mesureIn);
        return (
          <WeekDayCard
            key={dayName}
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
