import React, { useContext } from 'react';
import { WeatherContext } from '../../weather-context/weather-context';

const CurrentWeather = (props) => {
  const value = useContext(WeatherContext);
  return value['query'];
};

export default CurrentWeather;
