import "./App.css";

import Search from "./Search";

import CurrentWeather from "./CurrentWeather";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />

      <CurrentWeather
        city="New York"
        day="Tuesday"
        time="13:00"
        date="2023-02-07"
        temperature={4}
        wind={5}
        humidity={57}
        feel={0}
        description="clear"
        icon="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
      />

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
  );
}
