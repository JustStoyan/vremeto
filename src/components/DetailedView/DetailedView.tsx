import { HighlightCard } from "./HighlightCard";
import { SunRiseAndSet } from "./SunRiseAndSet";
import { WindStatus } from "./WindStatus";
import { Humidity } from "./Humidity";
import { Header } from "./Header";
import { Visibility } from "./Visibility";
import { Forcast } from "../Forcast";

import styles from "./DetailedView.module.css";

export const DetailedView = ({ weatherDetails, error }: any) => {
  return (
    <div className={`${styles["flex-wrapper"]} ${styles.wrapper}`}>
      <Header />
      {weatherDetails && <Forcast />}
      <h2>Detailed View</h2>
      {weatherDetails && (
        <div className={styles["grid-wrapper"]}>
          <HighlightCard
            title="Wind Status"
            component={<WindStatus windSpeed={weatherDetails.wind.speed} />}
          />
          <HighlightCard
            title="Sunrise & Sunset"
            component={
              <SunRiseAndSet
                sunrise={weatherDetails.sys.sunrise}
                sunset={weatherDetails.sys.sunset}
              />
            }
          />
          <HighlightCard
            title="Humidity"
            component={<Humidity humidity={weatherDetails.main.humidity} />}
          />
          <HighlightCard
            title="Visibility"
            component={<Visibility visibility={weatherDetails.visibility} />}
          />
        </div>
      )}
    </div>
  );
};
