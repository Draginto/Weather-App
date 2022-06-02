import React, { useContext } from 'react';
import { WeatherContext } from '../../weather-context/weather-context';

import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: 600;
  font-size: 5rem;
`;

const CurrentWeather = (props) => {
  const value = useContext(WeatherContext);
  return <>{value ? <Heading>{value}°</Heading> : ""}</>;
};

export default CurrentWeather;
