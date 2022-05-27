import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import Container from '../Container/Container';
import Row from '../Row/Row';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SentimentAnalysis from '../SentimentAnalysis/SentimentAnalysis';
import DateTime from './DateTime/DateTime';
import Search from '../shared/Search';

import { getGeoLocationCoordinates } from '../utils/getGeoLocationCoordinates';
import { fetchWeather } from "../utils/fetchWeather";
import { WeatherContext } from '../weather-context/weather-context';
import WeeklyWeather from './WeeklyWeather/WeeklyWeather';

const FlexBlock = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

const Weather = () => {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState({lat: 0, lon: 0, list: []});

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGeoLocationCoordinates(event.target.value).then((response) => {
      setFormData({...formData, lat: response.lat, lon: response.lon});
    })
    
    fetchWeather(formData.lat, formData.lon).then((response) => {
      setFormData({...formData, todayTemp: Math.round(response.list[0].main.temp), list: response.list});
    })
    
    setLocation('');
  };

  return (
    <WeatherContext.Provider value={formData.todayTemp}>
      <Container classes="mt-2 border rounded p-4">
        <Row>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <Search
                type="text"
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
          <Row rowColumns="row-cols-5">
          <div className='col-md-12'>
            <WeeklyWeather weatherData={formData.list}/>
          </div>
        </Row>
      </Container>
    </WeatherContext.Provider>
  );
};

export default Weather;
