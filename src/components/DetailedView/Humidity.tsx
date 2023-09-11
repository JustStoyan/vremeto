import styles from "./Humidity.module.css";

export const Humidity = ({ humidity }: any) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.content}>{humidity} </p>
      <sup>%</sup>
    </div>
  );
};
