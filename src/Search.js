import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-9 search-form col-auto">
            <input
              type="search"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Search City"
              autoFocus="on"
            />
          </div>

          <div className=" col-3 col-auto me-auto p-0">
            <input type="submit" value="search" className="search-button btn w-100" />
          </div>
        </div>
      </form>

      <div className="button">
        <button className="Location-button">Current Location</button>
      </div>
    </div>
  );
}
