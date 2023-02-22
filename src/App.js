import React from "react";

import Search from "./Search";
import Footer from "./Footer";

import "./App.css";



export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Search /> */}

        <Search defaultCity="New York" />

        {/* <!-- // **********************************
      // **********************************
      // FORECAST
      // **********************************
      // ********************************** --> */}
        {/* <div>
        <div class="card bg-transparent card-2 shadow border-0">
          <div class="weather-forecast text-center" id="forecast">
            
        </div>
      </div> */}

        <Footer />
      </div>
    </div>
  );
}
