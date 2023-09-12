import { convertToHours } from "../../utils";
import styles from "./SunRiseAndSet.module.css";

export const SunRiseAndSet = ({ sunrise, sunset }: any) => {
  sunrise = convertToHours(sunrise);
  sunset = convertToHours(sunset);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sunrise}>
        <img src="/weathericons/sunrise.png" alt="Sunrise icon" />
        <div>{sunrise}</div>
      </div>
      <div className={styles.sunset}>
        <img src="/weathericons/sunset.png" alt="Sunset icon" />
        <div>{sunset}</div>
      </div>
    </div>
  );
};
