import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App(){
  return(
    <div className="App">
      <div className="container">
      <Weather defaultCity="London"/>
      <footer>
        This project was coded by {""} <a href="" target="_blank" rel="noopener norefferer">Ludmila Lee Kaplanova</a>{""}
        and is open-sourced on {""}<a href="" target="_blank">GitHub</a>{""}
        and hosted on {""}<a href="" target="_blank">Netlify</a>

      </footer>
    </div>
    </div>
  );
}
