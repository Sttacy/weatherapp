import React from "react";
import { useAPP } from "../../utils/context";
import { formateDate } from "../../utils/formatDate";

export default function Forecast() {
  const { weatherState } = useAPP();
  const weatherData = weatherState.forecast?.forecastday;
  if (!weatherData) {
    return null;
  }
  console.log(weatherData);
  const localDateTime = new Date(weatherData.date);
  return (
    <div>
      <h1>Прогноз на {weatherData.length} дні</h1>
      <ul>
        {weatherData?.map((item) => (
          <li>
            <img src={item.day.condition.icon} alt="" />

            <p>{item.day.avgtemp_c} C</p>
            <p>{formateDate(localDateTime , {
    weekday: "long",
    month:"long",
    day:"numeric"
  })}</p>
          </li>

        ))}
      </ul>
    </div>
  );
}
