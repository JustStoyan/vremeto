import styles from "./WindStatus.module.css";

export const WindStatus = ({ windSpeed }: any) => {
  return (
    <div>
      <div className={styles["wrapper"]}>
        <span className={styles["wind-speed"]}>{windSpeed}</span>{" "}
        <sub>km/h</sub>
      </div>
    </div>
  );
};
