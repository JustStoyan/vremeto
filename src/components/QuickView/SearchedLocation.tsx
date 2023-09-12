import styles from "./SearchedLocation.module.css";

export const SearchedLocation = ({ cityName, country }: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.location}>
        <h3 className={styles.name}>{`${cityName}, ${country}`}</h3>
      </div>
    </div>
  );
};
