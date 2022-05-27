 import axios from "axios";
 
 export const fetchWeather = (lat, long) => {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    ).then((response) => {
      return response.data;
    });
    return response;
  };