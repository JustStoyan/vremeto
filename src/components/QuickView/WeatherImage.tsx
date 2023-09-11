import styles from "./WeatherImage.module.css";

export const WeatherImage = ({ weatherIcon }: any) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
        alt="Weather Icon"
      />
    </div>
  );
};
