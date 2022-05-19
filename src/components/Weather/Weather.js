import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '../Container/Container';
import Row from '../Row/Row';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SentimentAnalysis from '../SentimentAnalysis/SentimentAnalysis';
import DateTime from './DateTime/DateTime';
import Search from '../shared/Search';

import { WeatherContext } from '../weather-context/weather-context';

import styled from 'styled-components';

const FlexBlock = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

const Weather = (props) => {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState({});

  const getLocationGeoCoordinates = (locationData) => {
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${
          locationData || 'New+York'
        }&limit=5&appid=e495de1eca56adfc01f9485fd2316a63`
      )
      .then((response) => {
        return response;
      });
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, query: location });
    setLocation('');
  };

  const getCurrentLocation = () => {
    const coords = {};
    navigator.geolocation.getCurrentPosition((position) => {
      coords['lat'] = position.coords.latitude;
      coords['long'] = position.coords.longitude;
      return coords;
    });
    return coords;
  };

  useEffect(() => {
    const { lat, long } = getCurrentLocation();
    const fetchWeather = () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=e495de1eca56adfc01f9485fd2316a63`
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    };
    fetchWeather();
  }, []);

  return (
    <WeatherContext.Provider value={formData}>
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
