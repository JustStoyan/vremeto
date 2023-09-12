import { useState } from "react";
import { useDispatch } from "react-redux";
import { configActions } from "../../store/Slices/configSlice";
import { SearchIcon } from "../UI/Icons/SearchIcon";
import AutoComplete from "../AutoCompleate";
import styles from "./Search.module.css";

export const Search = () => {
  const [city, setCity] = useState<string>("");
  const dispatch = useDispatch();

  const changeCityHandler = (e: any) => {
    setCity((prev) => (prev = e.target.value));
  };

  const searchForDataHandler = (e: any) => {
    e.preventDefault();
    dispatch(configActions.changeCityName(city));
    dispatch(configActions.changeLocation(null));
    setCity((prev) => (prev = ""));
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={searchForDataHandler}>
        <SearchIcon />
      </div>
      <form onSubmit={searchForDataHandler}>
        {/* <AutoComplete suggestions={['asdf','aa','om']}/>  */}
        <input
          type="text"
          placeholder="Search for places..."
          value={city}
          onChange={changeCityHandler}
        />
      </form>
    </div>
  );
};
