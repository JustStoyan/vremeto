import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

export const Visibility = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);
  const visability = data && data.visibility / 1000;
  return (
    <div>
      <p>{`${visability} km`}</p>
    </div>
  );
};
