import { HighlightCard } from "./HighlightCard";
import { SunRiseAndSet } from "./SunRiseAndSet";
import { WindStatus } from "./WindStatus";

import styles from "./DetailedView.module.css";
import { Humidity } from "./Humidity";
import { Header } from "./Header";
import { Visibility } from "./Visibility";
import { WeekForcast } from "../WeekForcast";
export const DetailedView = () => {
  return (
    <div className={styles["flex-wrapper"]}>
      <Header />
      <WeekForcast />
      <div className={styles["grid-wrapper"]}>
        <HighlightCard title="Wind Status" component={<WindStatus />} />
        <HighlightCard title="Sunrise & Sunset" component={<SunRiseAndSet />} />
        <HighlightCard title="Humidity" component={<Humidity />} />
        <HighlightCard title="Visibility" component={<Visibility />} />
        <HighlightCard title="Sunrise & Sunset" component={<SunRiseAndSet />} />
        <HighlightCard title="Humidity" component={<Humidity />} />
        <HighlightCard title="Wind Status" component={<WindStatus />} />
        <HighlightCard title="Sunrise & Sunset" component={<SunRiseAndSet />} />
        <HighlightCard title="Humidity" component={<Humidity />} />
      </div>
    </div>
  );
};
