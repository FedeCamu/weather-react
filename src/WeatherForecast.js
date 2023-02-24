import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {

  function handleForecastResponse(response) {
    console.log(response.data);
  }

  const apiKey = "7059cb165caa3316bff682d263a01b1e";
  const units = "metric";
  const lat = props.coordinates.lat;
  const lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleForecastResponse);

  return (
    <div className="WeatherForecast">
      <div className="card bg-transparent card-2 shadow border-0">
        <div className="row"></div>
        <div className="col">
          <div className="day">Fri</div>
          <WeatherIcon code="01d" size={32} />
          <div className="temperature">
            <span className="max-temp">10º</span> <span className="min-temp">2º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
