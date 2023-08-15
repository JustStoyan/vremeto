import styles from "./Header.module.css";
import { Button } from "../UI/Button";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/Slices/uiSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const metricInUse = useSelector((state: any) => state.ui.mesureIn);

  const changeMetricHandler = (e: any) => {
    dispatch(uiActions.changeUnit(e.target.id));
  };

  return (
    <header className={styles.wrapper}>
      <h2>Today's Highlights</h2>
      <div className={styles.buttons}>
        <Button
          id="celsius"
          className={metricInUse === "celsius" ? styles.selected : ""}
          onClick={changeMetricHandler}
        >
          <sup id="celsius">°</sup>
          <span id="celsius">C</span>
        </Button>
        <Button
          id="fahrenheit"
          className={metricInUse === "fahrenheit" ? styles.selected : ""}
          onClick={changeMetricHandler}
        >
          <sup id="fahrenheit">°</sup>
          <span id="fahrenheit">F</span>
        </Button>
      </div>
    </header>
  );
};
