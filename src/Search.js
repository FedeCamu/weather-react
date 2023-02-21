import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="mb-3 search-form shadow">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Search City"
          />
        </div>
      </form>
      <div className="button">
        <button className="Location-button">Current Location</button>
      </div>
    </div>
  );
}
