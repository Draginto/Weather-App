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

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ query: location });
    setLocation('');
  };

  useEffect(() => {
    const fetchWeather = () =>
      axios
        .get(
          'https://api.openweathermap.org/data/2.5/forecast?lat=30&lon=30&appid=e495de1eca56adfc01f9485fd2316a63'
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
  }, []);

  return (
    <WeatherContext.Provider value={formData}>
      <Container classes="mt-2 border rounded p-2">
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
            {/* <Forecast /> */}
          </div>
          <div className="col-md-6">test</div>
        </Row>
      </Container>
    </WeatherContext.Provider>
  );
};

export default Weather;
