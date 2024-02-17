import React from "react";
import { useAPP } from "../../utils/context";
import { formateDate } from "../../utils/formatDate";
import s from "../../style/weatherInfo.module.css";

export default function Forecast() {
  const { weatherState, updateIndex } = useAPP();
  const weatherData = weatherState.forecast?.forecastday;
  if (!weatherData) {
    return null;
  }
  const localDateTime = new Date(weatherData.date);
  function forecastClick(e) {
    const currentIndex =  weatherData.findIndex((item) => item.date === e.currentTarget.id)
  updateIndex(currentIndex)
  }
  return (
    <div
      className={s.card}
      style={{
        padding: "30px 30px",
      }}
    >
      <h1
        style={{
          fontSize: "35px",
        }}
      >
        {weatherData.length} days forecast:
      </h1>
      <ul>
        {weatherData?.map((item) => (
          // <div className={s.weatherCard}>
          <li
            style={{ cursor: "pointer" }}
            id={item.date}
            onClick={forecastClick}
            className={s.weatherCard}
          >
            <img src={item.day.condition.icon} alt="" />

            <p>{item.day.avgtemp_c} C</p>
            <p>
              {formateDate(localDateTime, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </li>
          // </div>
        ))}
      </ul>
    </div>
  );
}
