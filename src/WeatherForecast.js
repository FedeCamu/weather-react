import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="card bg-transparent card-2 shadow border-0">
        <div className="row"></div>
        <div className="col">
          <div className="day">Fri</div>
          <WeatherIcon code="01d" size={32} />
          <div className="temperature">
            <span class="max-temp">10º</span> <span class="min-temp">2º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
