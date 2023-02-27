import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

  function maxTemp (){

    let temperature = Math.round(props.data.temp.max);

    return `${temperature}`
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }


  function day(){

    let date = props.data.dt*1000;

    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return days[day];
  }



  return (
    <div className=" WeatherForecastDay">
      <div className="day">{day}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="temperature">
        <span className={maxTemp}>{props.data.temp.max}º</span>{" "}
        <span className={minTemp}>{props.data.temp.min}º</span>
      </div>
    </div>
  );
}
