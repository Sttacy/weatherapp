import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL, WEATHER_PROFILE } from "./db_prifile";

const AppContext = createContext();

export const useAPP = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState([]);
  const [weatherState, setWeather] = useState([]);

  const get_data = async (...objValue) => {
    const searchValue = objValue[0] || "ukraine";

    try {
      const response = await fetch(
        `${BASE_URL.apiNews}/${BASE_URL.path}?q=${searchValue}&${BASE_URL.apiKey}`
      );
      const data = await response.json();
      setGlobalState(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getWeatherData = async (...objValue) => {
    const searchValue = objValue[0] || "auto:ip";
    try {
      const response = await fetch(
        `${WEATHER_PROFILE.start_url}${objValue[1]}?${WEATHER_PROFILE.api_key}&q=${searchValue}&${objValue[2]}`
      );
      const data = await response.json();
      setWeather(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    get_data();
  }, []);

  return (
    <AppContext.Provider
      value={{ globalState, get_data, weatherState, getWeatherData }}
    >
      {children}
    </AppContext.Provider>
  );
};
