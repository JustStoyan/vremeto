import styles from "./RainProbabilty.module.css";

export const RainProbability = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.main} quick__view__margin `}>
        <div>Icon</div>
        <div>
          <p>Raing - 30%</p>
        </div>
      </div>
    </div>
  );
};
