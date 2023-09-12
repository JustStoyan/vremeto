import { convertToHours } from "../../utils";
import { SunriseIcon } from "../UI/Icons/SunriseIcon";
import { SunsetIcon } from "../UI/Icons/SunsetIcon";
import styles from "./SunRiseAndSet.module.css";

export const SunRiseAndSet = ({ sunrise, sunset }: any) => {
  sunrise = convertToHours(sunrise);
  sunset = convertToHours(sunset);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sunrise}>
        <SunriseIcon />
        <div>{sunrise}</div>
      </div>
      <div className={styles.sunset}>
        <SunsetIcon />
        <div>{sunset}</div>
      </div>
    </div>
  );
};
