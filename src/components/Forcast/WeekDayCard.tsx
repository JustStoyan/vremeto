import styles from "./WeekDayCard.module.css";

interface DayInterface {
  dayName?: string;
  iconUrl: string;
  minTemp: number;
  maxTemp: number;
  hours: string;
}

export const WeekDayCard = ({
  dayName,
  iconUrl,
  minTemp,
  maxTemp,
  hours,
}: DayInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["day-and-icon"]}>
        <h4>{dayName}</h4>
        <img src={iconUrl} alt="Weather icon representation" />
      </div>
      <div className={styles["temp-wrapper"]}>
        <p>
          {`${minTemp}`}
          <sup>°</sup>
        </p>
        <p>-</p>
        <p>
          {`${maxTemp}`}
          <sup>°</sup>
        </p>
      </div>
      <div>{hours}</div>
    </div>
  );
};
