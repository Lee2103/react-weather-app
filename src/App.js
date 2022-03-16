import React from "react";
import Weather from "./Weather";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App(){
  return(
    <div className="App">
      <div className="container">
      <Weather defaultCity="London"/>
      <footer>
        This project was coded by {""} <a href="" target="_blank" rel="noopener norefferer">Ludmila Lee Kaplanova</a>{" "}
        and is open-sourced on {""}<a href="https://github.com/Lee2103/react-weather-app" target="_blank" rel="norefferer noopener">GitHub</a>{" "}
        and hosted on {""}<a href="https://competent-mcnulty-28fbd0.netlify.app/" target="_blank" rel="norefferer noopener">Netlify</a>

      </footer>
    </div>
    </div>
  );
}
