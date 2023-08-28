import styles from "./Header.module.css";
import { Button } from "../UI/Button";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/Slices/uiSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const metricInUse = useSelector((state: any) => state.ui.mesureIn);
  const forcastType = useSelector((state: any) => state.ui.forcast);

  const changeMetricHandler = (e: any) => {
    dispatch(uiActions.changeUnit(e.target.id));
  };

  const changeForcastHandler = (e: any) => {
    dispatch(uiActions.changeForcastWindow(e.target.id));
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles["forcast-type"]}>
        <Button onClick={changeForcastHandler}>
          <span
            className={
              forcastType === "today" ? styles["forcast-type-active"] : ""
            }
            id="today"
          >
            Today
          </span>
        </Button>
        <Button onClick={changeForcastHandler} id="week">
          <span
            className={
              forcastType === "week" ? styles["forcast-type-active"] : ""
            }
            id="week"
          >
            Week
          </span>
        </Button>
      </div>
      <div className={styles["metric-type"]}>
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
