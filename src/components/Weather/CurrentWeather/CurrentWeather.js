import React, { useContext } from 'react';
import { WeatherContext } from '../../weather-context/weather-context';

const CurrentWeather = (props) => {
  const value = useContext(WeatherContext);
  return <h1>{value['query']}</h1>;
};

export default CurrentWeather;
