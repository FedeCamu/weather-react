import React, { useState } from "react";
import "./CurrentWeather.css";
import Search from "./Search";
import axios from "axios";

export default function CurrentWeather(props) {
  
  const [weather, setWeather] = useState({ready:false});
  

  function showWeather(response) {
    setWeather({
    ready: true, 
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feel: response.data.main.feels_like,
    });
    
  }

  if (weather.ready) {
    return (
      <div className="CurrentWeather">
        <Search />
        <div className="card bg-transparent card-1 shadow border-0">
          <div className="row">
            <div className="col-5 p-2">
              <h1 className="city">{weather.city}</h1>
              <ul>
                <li className="current-day">
                  {props.day} {props.time}
                </li>
                <li className="current-day">{props.date}</li>
              </ul>
            </div>
            <div className="col-3">
              <h1 className="empty"> </h1>
            </div>
            <div className="col-4 p-2">
              <h2 className="current">Current</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-4 p-2"></div>
            <div className="col-4 p-2 current-weather d-flex justify-content-center">
              <img
                src={weather.icon}
                alt="clear"
                width="160"
                className="d-flex"
              />
            </div>
            <div className="col-4 p-2 d-flex justify-content-end">
              <p className="current-temperature">
                {" "}
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>{" "}
                <span className="units">ºC</span>
                <strong></strong>
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-start">
            <div className="col-4 p-2">
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-wind conditions-fa"></i>
                  </span>
                  <span className="conditions">
                    {Math.round(weather.wind)}km/h{" "}
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-droplet conditions-fa"></i>
                  </span>
                  <span className="conditions">{weather.humidity}% </span>
                </li>
                <li>
                  <span className="weather-feels like">
                    <i className="fa-solid fa-temperature-low conditions-fa"></i>
                  </span>
                  <span className="conditions">
                    {Math.round(weather.feel)}º
                  </span>{" "}
                  <span>RealFeel</span>
                </li>
              </ul>
            </div>
            <div className="col-8 current-weather d-flex align-items-center justify-content-end">
              <h1 className="current-weather-desc">{weather.description}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
      let city = props.defaultCity;
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}
