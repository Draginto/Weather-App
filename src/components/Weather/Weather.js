import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '../Container/Container';
import Row from '../Row/Row';
import Search from '../shared/Search';
import CurrentWeather from './CurrentWeather/CurrentWeather';

import { WeatherContext } from '../weather-context/weather-context';

const Weather = (props) => {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState({});

  const getLocationGeoCoordinates = (locationData) =>
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${
          locationData || 'New+York'
        }&limit=5&appid=e495de1eca56adfc01f9485fd2316a63`
      )
      .then((response) => (formData['weather'] = response));

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ query: location });
    getLocationGeoCoordinates(location);
    setLocation('');
  };

  useEffect(() => {
    const fetchWeather = () =>
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=40.7128&lon=74.0060&appid=e495de1eca56adfc01f9485fd2316a63`
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
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
            <CurrentWeather />
          </div>
          <div className="col-md-6">test</div>
        </Row>
      </Container>
    </WeatherContext.Provider>
  );
};

export default Weather;
