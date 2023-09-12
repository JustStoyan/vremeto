//Converts a timestamp to hours with minutes
export const convertToHours = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const timeArray = date.toTimeString().split(" ")[0].split(":");
  const time = `${timeArray[0]}:${timeArray[1]}`;
  return time;
};

//Converts timestamp to a day of the week
export const getCurrentDay = (timestamp: number) => {
  const DAYS: any = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wendsday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
  };

  const dayFromTimestamp = new Date(timestamp * 1000).getDay().toString();
  const currentDay: any = DAYS[dayFromTimestamp];

  return currentDay;
};

//Retrieves the correct icon from OpenWeatherAPI based on their response
export const iconUrlHandler = (weatherIcon: string) => {
  const iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
  return iconUrl;
};

//Returns the temperature in celsius or farenhai
export const getTemperature = (degrees: number, metric: string) => {
  const tempInCelsius = degrees && Math.round(degrees);
  const tempInFarenhait = Math.round(tempInCelsius * (9 / 5) + 32);

  if (metric === "celsius") {
    return tempInCelsius;
  } else {
    return tempInFarenhait;
  }
};

//Calculates the avrage of an array of numbers.
export const avrgTemp = (tempList: number[]) => {
  let sumOfTemp = 0;

  tempList.forEach((temp) => {
    sumOfTemp += temp;
  });

  const avrgResult = sumOfTemp / tempList.length;
  return avrgResult;
};

//Retrieve the current geolocation
export const retrieveCurrenLocation = (dispatch: any, configActions:any) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          lat: Number(position.coords.latitude.toFixed(2)),
          lon: Number(position.coords.longitude.toFixed(2)),
        };
        dispatch(configActions.changeLocation(newLocation));
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  } else {
    console.error("Geolocation is not available in this browser");
  }
};

//Create a list with unique days from a list with 5 results per each day.

export const createUniqeDaysData = (list: any) => {
  const weekDays: any = [];
  let today = "";

  list.forEach((result: any) => {
    let currentDayData = {
      day: getCurrentDay(result.dt).slice(0, 3),
      minTemp: result.main.temp_min,
      maxTemp: result.main.temp_max,
      icon: result.weather[0].icon,
    };

    if (today !== currentDayData.day) {
      weekDays.push(currentDayData);
      today = currentDayData.day;
    }
  });

  return weekDays;
};


