import styles from "./WeatherDescription.module.css";

export const WeatherDescription = ({
  weatherIcon,
  weatherDescription,
}: any) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt="weather icon"
        />
      </div>
      <p>{weatherDescription}</p>
    </div>
  );
};
