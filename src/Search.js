import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-8 search-form">
            <input
              type="search"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Search City"
            />
          </div>

          <div className=" col-3">
            <input type="submit" value="search" className="search-button" />
          </div>
        </div>
      </form>

      <div className="button">
        <button className="Location-button">Current Location</button>
      </div>
    </div>
  );
}
