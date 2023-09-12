import styles from "./QuickView.module.css";

import { Header } from "./Header";
import { WeatherImage } from "./WeatherImage";
import { DegreeAndDay } from "./DegreeAndDay";
import { WeatherDescription } from "./WeatherDescription";

import { SearchedLocation } from "./SearchedLocation";

export const QuickView = ({ weatherDetails }: any) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {weatherDetails && (
        <div className={styles["quick-data"]}>
          <WeatherImage weatherIcon={weatherDetails.weather[0].icon} />
          <DegreeAndDay />
          <WeatherDescription
            weatherIcon={weatherDetails.weather[0].icon}
            weatherDescription={weatherDetails.weather[0].description}
          />
          <SearchedLocation cityName={weatherDetails.name} country={weatherDetails.sys.country} />
        </div>
      )}
    </div>
  );
};
