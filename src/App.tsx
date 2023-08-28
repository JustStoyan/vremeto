import styles from "./App.module.css";
import { DetailedView } from "./components/DetailedView";
import { QuickView } from "./components/QuickView";

function App() {
  return (
    <div className={styles["app-wrapper"]}>
      <div className={styles.app}>
        <QuickView />
        <DetailedView />
      </div>
    </div>
  );
}

export default App;
