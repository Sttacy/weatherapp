import React, { useEffect, useState } from "react";
import { useAPP } from "../utils/context";
import { WEATHER_PROFILE } from "../utils/db_prifile";
import s from "../style/news.module.css";
import Date_location from "../components/weather/Date_location";
import Current_forecast from "../components/weather/current_forecast";
import CurrentForecast from "../components/weather/current_forecast";
import Forecast from "../components/weather/forecast";

const Weather = () => {
  const { weatherState, getWeatherData } = useAPP();
  const [weather, setWeather] = useState(weatherState);
  const [inputValue, setInputValue] = useState("");

  const fetchWeatherData = async () => {
    try {
      const result = await getWeatherData(
        inputValue,
        WEATHER_PROFILE.parh_forecast,
        "days=7&aqi=yes&alerts=no"
      );
      setWeather(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);
  console.log(weather.location);
  //!
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  // функція підписки на форму
  function onFormSubmit(e) {
    e.preventDefault();
    fetchWeatherData();
  }
  //!

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className={s.searchInput}
          placeholder="What you want?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button>Знайти</button>
      </form>
      <div style={{
        display:"flex",
        justifyContent:"space-around", flexWrap: "wrap"
      }}>
        <Date_location location= {weather.location}/>
        <CurrentForecast/>
        <Forecast/>
      </div>
    </div>
  );
};

export default Weather;
