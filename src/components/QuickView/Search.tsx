import { useState } from "react";
import { useDispatch } from "react-redux";
import { configActions } from "../../store/Slices/configSlice";
import { SearchIcon } from "../UI/Icons/SearchIcon";
import styles from "./Search.module.css";

import { useGetWeatherByCityQuery } from "../../store/fetchWeatherData";

export const Search = () => {
  const [city, setCity] = useState<string>("");
  const [skip, setSkip] = useState<boolean>(true);
  const dispatch = useDispatch();

  const changeCityHandler = (e: any) => {
    !skip && setSkip(true);

    setCity((prev) => (prev = e.target.value));
  };

  const searchForDataHandler = (e: any) => {
    e.preventDefault();
    dispatch(configActions.changeCityName(city));
    setSkip((prev) => (prev = false));
  };

  const { data } = useGetWeatherByCityQuery(city, { skip });
  console.log(data);

  return (
    <div className={styles.wrapper}>
      <div onClick={searchForDataHandler}>
        <SearchIcon />
      </div>
      <form onSubmit={searchForDataHandler}>
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
