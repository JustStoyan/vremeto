import { Search } from "./Search";
import { LocationIcon } from "../UI/Icons/LocationIcon";
import { Button } from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { configActions } from "../../store/Slices/configSlice";

import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: any) => state.config.location);

  const searchByLocationHandler = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: Number(position.coords.latitude.toFixed(2)),
            lon: Number(position.coords.longitude.toFixed(2)),
          };
          dispatch(configActions.changeLocation(newLocation));
          console.log(newLocation)
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Search />
      </div>
      <Button onClick={searchByLocationHandler}>
        <LocationIcon />
      </Button>
    </div>
  );
};
