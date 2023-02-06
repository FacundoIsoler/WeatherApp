import {API_KEY} from '../app/keys/keys.js';

export const getWeather = async (e) => {
    e.preventDefault();
    // const {units} = e.target.elements
    // console.log(units);
    const {city, country} = e.target.elements
    const cityValue = city.value;
    const countryValue = country.value;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}, ${countryValue}&appid=${API_KEY}&units=metric`
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    // this.setState({
    //     temperature: data.temperature,
    //     description: data.description,
    //     humidity: data.humidity,
    //     wind_speed: data.wind_speed,
    //     city: data.city,
    //     country: data.country,
    // });
}


