
import styles from './App.module.css'
import { DetailedView } from "./components/DetailedView";
import { QuickView } from "./components/QuickView";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <QuickView />
        <DetailedView />
      </div>
    </div>
  );
}

export default App;
