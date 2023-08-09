import { Fragment } from "react";
import { SearchIcon } from "../UI/Icons/SearchIcon";
import { Search } from "./Search";
import { LocationIcon } from "../UI/Icons/LocationIcon";
import { Button } from "../UI/Button";

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <SearchIcon />
        <Search />
      </div>
      <Button>
        <LocationIcon />
      </Button>
    </div>
  );
};
