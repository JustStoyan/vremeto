import { useGetForcastByCityQuery } from "../../store/fetchWeatherData";
import { WeekForcast } from "./WeekForcast";
import { TodayForcast } from "./TodayForcast";
import { useSelector } from "react-redux";

export const Forcast = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetForcastByCityQuery(city);

  const forcastType = useSelector((state: any) => state.ui.forcast);
  return (
    <>
      {forcastType === "today" ? (
        <TodayForcast forcastDetails={data} />
      ) : (
        <WeekForcast forcastDetails={data} />
      )}
    </>
  );
};
