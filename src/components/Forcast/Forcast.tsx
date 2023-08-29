import { WeekForcast } from "./WeekForcast";
import { TodayForcast } from "./TodayForcast";

import { useSelector } from "react-redux";

export const Forcast = () => {
  const forcastType = useSelector((state: any) => state.ui.forcast);
  return <>{forcastType === "today" ? <TodayForcast /> : <WeekForcast />}</>;
};
