import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="credits">
        This project was coded by
        <a
          className="credits-ref"
          href="https://federica-c-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          F. Camuncoli
        </a>{" "}
        <br />
        Open-sourced on
        <a
          className="credits-ref"
          href="https://github.com/FedeCamu/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        and hosted on
        <a
          className="credits-ref"
          href="https://weather-app-react-pro.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
