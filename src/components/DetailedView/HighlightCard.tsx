import styles from "./HighlightCard.module.css";

export const HighlightCard = ({ title, component }: any) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div>{component}</div>
    </div>
  );
};
