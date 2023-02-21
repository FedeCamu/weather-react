import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="card bg-transparent card-1 shadow border-0">
        <div className="row">
          <div className="col-5 p-2">
            <h1 className="city">{props.city}</h1>
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
            <img src={props.icon} alt="clear" width="160" className="d-flex" />
          </div>
          <div className="col-4 p-2 d-flex justify-content-end">
            <p className="current-temperature">
              {" "}
              {props.temperature}ºC
              <strong></strong>
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-4 p-2">
            <ul>
              <li>
                <span>
                  <i className="fa-solid fa-wind conditions-fa"></i>{" "}
                </span>
                <span className="conditions">{props.wind}km/h </span>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-droplet conditions-fa"></i>
                </span>
                <span className="conditions">{props.humidity}% </span>
              </li>
              <li>
                <span className="weather-feels like">
                  <i className="fa-solid fa-temperature-low conditions-fa"></i>
                </span>
                <span className="conditions">{props.feel}º <small>RealFeel</small></span>
              </li>
            </ul>
          </div>
          <div className="col-8 current-weather d-flex align-items-center justify-content-end">
            <h1 className="current-weather-desc">{props.description}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}