import styles from "./Visibility.module.css";

export const Visibility = ({ visibility }: any) => {
  visibility = Number(visibility) / 1000;

  return (
    <div className={styles.wrapper}>
      <p>{`${visibility} km`}</p>
    </div>
  );
};
