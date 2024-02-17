import React from 'react';
import { useAPP } from '../../utils/context';
import s from "../../style/weatherInfo.module.css";
import humidity from "../../assets/humidity.png"
import pressure from "../../assets/pressure.png"
import u from "../../assets/u.png"
import wind from "../../assets/wind.png"
export default function CurrentForecast() {
    const { weatherState } = useAPP();
    const weatherData = weatherState.current;
    if(!weatherData){
        return null
    }
console.log(weatherData);
    return (
    <div className={s.card} style={{
        width: "50vw",
        borderRadius: "20px",
      }}>
        <div className= {s.mainTemp}>
        <div className={s.weatherTemp} >     <p className={s.temp}>{Math.round(weatherData.temp_c)} C</p>
        <p className={s.feelsLike}> <span>Feels like: </span> {weatherData.feelslike_c} C</p>
        <div className={s.flex}>        <img src={weatherData.condition.icon} />
      <p>{weatherData.condition.text}</p></div></div>
        <div className={s.condition}>
        <figure>
  <img src={humidity}/>
  <figcaption>{weatherData.humidity}%</figcaption>
</figure>
<figure>
  <img src={pressure}/>
  <figcaption>{weatherData.pressure_mb}hPa</figcaption>
</figure>
<figure>
  <img src={u}/>
  <figcaption>{weatherData.uv}</figcaption>
</figure>
<figure>
  <img src={wind}/>
  <figcaption>{weatherData.
wind_kph}kph</figcaption>
</figure>
        </div>
    </div>
    </div>
  )
}
