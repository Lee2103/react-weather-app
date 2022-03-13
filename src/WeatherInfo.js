import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo (props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <h2><FormattedDate date={props.data.date}/></h2>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} size={52}/>
                            <ul>
                                <li className="text-capitalize">{props.data.description}</li>
                                <li><WeatherTemperature celsius={props.data.temperature}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity:{props.data.humidity}%</li>
                        <li>Wind:{props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}