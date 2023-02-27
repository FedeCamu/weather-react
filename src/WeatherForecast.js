import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
    // console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="card bg-transparent card-2 shadow border-0">
          <div className="row">
            <div className="col">
              <WeatherForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9cb245c8974a9aa2bee9c6e33954b52a";
    let units = "metric";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
