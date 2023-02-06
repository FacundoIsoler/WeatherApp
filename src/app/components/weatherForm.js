import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const WeatherForm = (props) => {

    // const dispatch = useDispatch();
    // const units = useSelector(state => state.units)

    return (
        <div className="card card-body">
            <form onSubmit={props.getWeather} >
                <div className="form-group">
                    <input type="text" name="city" placeholder="Your ciity name" className="form-control" autoFocus />
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Your country name" className="form-control" />
                </div>
                {/* <select className="form-control" name="units">
                    <option value="">Select your units</option>
                    <option value="Celcius" selected>Celcius</option>
                    <option value="Fahrenheit " selected>Fahrenheit </option>
                </select> */}
                <button className="btn btn-success btn-block">
                    Get Weather
                </button>
            </form>
        </div>
    )
}

export default WeatherForm;