import styles from "./App.module.css";
import { WeatherData } from "./components/DetailedView/WeatherData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={styles["app-wrapper"]}>
      <div className={styles.app}>
        <ToastContainer />
        <WeatherData/>
      </div>
    </div>
  );
}

export default App;
