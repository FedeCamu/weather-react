import React from "react";

export default function WeatherBackground(props) {
  const determineBackground = () => {
    if (props.code) {
      const weatherCode = props.code;
      if (weatherCode >= 200 && weatherCode <= 531) {
        return "rain.jpg";
      } else if (weatherCode >= 600 && weatherCode <= 622) {
        return "snow.jpg";
      } else if (weatherCode >= 701 && weatherCode <= 781) {
        return "fog.jpg";
      } else if (weatherCode === 800) {
        return "sunny-sky.jpg";
      } else {
        return "cloudy.jpg";
      }
    } else {
      return "default.jpg";
    }
  };

  let backGroundUrl = `./imgs/${determineBackground()}`;

  return (
     


    <div
      style={{
        backgroundImage: `url(${backGroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
    </div>
  );
  
}
