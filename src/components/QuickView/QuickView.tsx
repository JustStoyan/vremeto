import styles from "./QuickView.module.css";

import { Header } from "./Header";
import { WeatherImage } from "./WeatherImage";
import { DegreeAndDay } from "./DegreeAndDay";
import { WeatherDescription } from "./WeatherDescription";

import { SearchedLocation } from "./SearchedLocation";

export const QuickView = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles["quick-data"]}>
        <WeatherImage />
        <DegreeAndDay />
        <WeatherDescription />
        {/* <RainProbability /> */}
        <SearchedLocation />
      </div>
    </div>
  );
};
