import { Search } from "./Search";
import { LocationIcon } from "../UI/Icons/LocationIcon";
import { Button } from "../UI/Button";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Search />
      </div>
      <Button>
        <LocationIcon />
      </Button>
    </div>
  );
};
