import React from "react";
import { useAPP } from "../../utils/context";
import { formateTime } from "../../utils/formatDate";
import navigation from "../../assets/navigation.png";
import s from "../../style/weatherInfo.module.css";

export default function HourForecast() {
  const { weatherState, index } = useAPP();
  if (!weatherState) {
    return null;
  }
  const forecastData = weatherState?.forecast?.forecastday[index].hour;
  const options = { hour: "numeric", minute: "2-digit" };
  // console.log(forecastData);
  return (
    <div className={s.card}>
      <h1 style={{marginTop: "30px"}}>Hourly forecast:</h1>
      <ul className={s.hourlyForecast}>
        {forecastData?.map((item) => {
          const localDateTime = new Date(item.time || null);
          return (
            <li id={item.day}>
              <p>{formateTime(localDateTime, options)}</p>
              <img src={item.condition.icon} alt="" />
              <p>{Math.round(item.temp_c)} C</p>
              <img
                style={{ transform: `rotate(${item.wind_degree}deg)` , marginTop:"20px" }}
                src={navigation}
                alt="wind"
              />
              <p>{Math.round(item.wind_kph)} kph</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
