import { Search } from "./Search";
import { LocationIcon } from "../UI/Icons/LocationIcon";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { configActions } from "../../store/Slices/configSlice";
import { retrieveCurrenLocation } from "../../utils";

import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div>
        <Search />
      </div>
      <Button onClick={() => retrieveCurrenLocation(dispatch, configActions)}>
        <LocationIcon />
      </Button>
    </div>
  );
};
