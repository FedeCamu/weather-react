import "./App.css";

// import Search from "./Search";

import CurrentWeather from "./CurrentWeather";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <Search /> */}

        <CurrentWeather defaultCity="London" day="Tuesday" time="13:00" date="2023-02-07" />

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
