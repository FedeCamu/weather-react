import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentWeather from "./CurrentWeather";

export default function Search(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  // const [location, setLocation] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      feel: response.data.main.feels_like,
    });
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  // function showPosition(position) {
  //   setLocation({
  //     ready: true,
  //     latitude: position.coords.latitude,
  //     longitude: position.coords.longitude,
  //   });

    function showPosition(position) {
    
      let latitude= position.coords.latitude
      let longitude= position.coords.longitude
   

    // console.log(location.latitude, location.longitude);

    let units = "metric";

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
    axios
      .get(
        `${apiUrl}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
      )
      .then(showWeather);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 search-form col-auto">
              <input
                type="search"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Search City"
                autoFocus="on"
                onChange={handleChangeCity}
              />
            </div>

            <div className=" col-3 col-auto me-auto p-0">
              <input
                type="submit"
                value="search"
                className="search-button btn w-100"
              />
            </div>
          </div>
        </form>

        <div className="button">
          <button className="Location-button" onClick={handleLocationClick}>
            Current Location
          </button>
        </div>
        <CurrentWeather data={weather} />
      </div>
    );
  // } else {
  //   if (location.ready) {
  //     return (
  //       <div className="Search">
  //         <form onSubmit={handleSubmit}>
  //           <div className="row">
  //             <div className="col-9 search-form col-auto">
  //               <input
  //                 type="search"
  //                 className="form-control"
  //                 aria-describedby="emailHelp"
  //                 placeholder="Search City"
  //                 autoFocus="on"
  //                 onChange={handleChangeCity}
  //               />
  //             </div>

  //             <div className=" col-3 col-auto me-auto p-0">
  //               <input
  //                 type="submit"
  //                 value="search"
  //                 className="search-button btn w-100"
  //               />
  //             </div>
  //           </div>
  //         </form>

  //         <div className="button">
  //           <button className="Location-button" onClick={handleLocationClick}>
  //             Current Location
  //           </button>
  //         </div>
  //         <CurrentWeather data={weather} />
  //       </div>
  //     );
  //   } 
    }else {
      search();
    }
  }

