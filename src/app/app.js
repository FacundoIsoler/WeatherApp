import React from 'react'

import WeatherInfo from './components/weatherInfo';
import WeatherForm from './components/weatherForm';
import s from './app.module.css';

import {getWeather} from './../Actions/getWeather.js';

function App() {

    return (
        <div className="container p-4">
            <div className="row p-3">
                <div className="col-md-4 mx-auto">
                    <WeatherForm getWeather={getWeather}/>
                    <WeatherInfo/>
                </div>
            </div>
        </div>
    )
}

export default App;