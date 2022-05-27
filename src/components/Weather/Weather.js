import React, { useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import Container from '../Container/Container';
import Row from '../Row/Row';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SentimentAnalysis from '../SentimentAnalysis/SentimentAnalysis';
import DateTime from './DateTime/DateTime';
import Search from '../shared/Search';

import { getGeoLocationCoordinates } from '../utils/getGeoLocationCoordinates';
import { WeatherContext } from '../weather-context/weather-context';

const FlexBlock = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

const Weather = () => {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState({});
  
  const fetchWeather = async (lat, long) => {
    // fetch 
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=`
    );
    return response.data;
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({...formData, coord: getGeoLocationCoordinates(event.target.value)});
    console.log(formData["coord"]);
    console.log(await fetchWeather(formData["coord"]["lat"], formData["coord"]["lon"]));
    setLocation('');
  };

  return (
    <WeatherContext.Provider value="72">
      <Container classes="mt-2 border rounded p-4">
        <Row>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <Search
                className="form-control"
                placeholder="Search for city, state or zip code"
                value={location}
                onChange={handleChange}
              />
            </form>
            <FlexBlock>
              <CurrentWeather />
              <SentimentAnalysis className="ml-2" />
            </FlexBlock>
          </div>
          <div className="col-md-6">
            <DateTime />
          </div>
        </Row>
      </Container>
    </WeatherContext.Provider>
  );
};

export default Weather;
