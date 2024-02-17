import React from "react";
import s from "../../style/weatherInfo.module.css";
import { formateDate, formateTime } from "../../utils/formatDate";

export default function Date_location(props) {
  const loc_data = props.location;
  if (!loc_data) {
    return null;
  }
  const localDateTime = new Date(loc_data.localtime);
  // const formatedTime = localDateTime.toLocaleTimeString([], {
  //   hour: "numeric",
  //   minute: "2-digit",
  // });
  // const formatedDate = localDateTime.toLocaleDateString("uk-uA", {
  //   weekday: "long",
  //   month:"long",
  //   day:"numeric"
  // });
  return (
    <div className={s.card} style={{
        width: "30vw",
        padding: "20px",
        borderRadius: "20px",
      }}>
      <ul className={s.date_bow}>
        <li className={s.city}>{loc_data.name}</li>
        <li className={s.time}>{ formateTime(localDateTime,  {
    hour: "numeric",
    minute: "2-digit",
  } )}</li>
        <li className={s.date}>{
        formateDate(localDateTime , {
    weekday: "long",
    month:"long",
    day:"numeric"
  })}</li>
      </ul>
    </div>
  );
}
