import React from "react";

import axios from "axios";

export default function Weather(props){

     let apiKey = "fc8dd57d1eb9660674b78fd766d5034d";
     let units = "metric";
     let city = props.city;
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    function handleResponse(response){
        alert(`The weather in ${city} is ${response.data.main.temp}ºC`);
    }

   

    axios.get(apiUrl).then(handleResponse);

return(
    <h2>Have a wonderful day!</h2>
);
}