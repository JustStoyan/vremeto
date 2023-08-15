import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";
import { convertToHours } from "../../utils";

export const SunRiseAndSet = () => {
  const city = useSelector((state: any) => state.config.city);
  const { data } = useGetWeatherByCityQuery(city);

  const sunrise = data && convertToHours(data.sys.sunrise);
  const sunset = data && convertToHours(data.sys.sunset);
  return (
    <div>
      <div>
        <div>Icon</div>
        <div>{sunrise}</div>
      </div>
      <div>
        <div>Icon</div>
        <div>{sunset}</div>
      </div>
    </div>
  );
};
