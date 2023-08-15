import { Fragment } from "react";
import styles from "./QuickView.module.css";

import { Header } from "./Header";
import { WeatherImage } from "./WeatherImage";
import { DegreeAndDay } from "./DegreeAndDay";
import { WeatherDescription } from "./WeatherDescription";
import { RainProbability } from "./RainProbabilty";
import { SearchedLocation } from "./SearchedLocation";

export const QuickView = () => {
  return (
    <div className={styles.wrapper}>
      <Fragment>
        <Header />
        <WeatherImage />
        <DegreeAndDay />
        <WeatherDescription />
        <RainProbability />
        <SearchedLocation />
      </Fragment>
    </div>
  );
};
