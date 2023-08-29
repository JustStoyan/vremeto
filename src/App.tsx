import styles from "./App.module.css";
import { DetailedView } from "./components/DetailedView";
import { QuickView } from "./components/QuickView";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={styles["app-wrapper"]}>
      <div className={styles.app}>
        <ToastContainer />
        <QuickView />
        <DetailedView />
      </div>
    </div>
  );
}

export default App;
