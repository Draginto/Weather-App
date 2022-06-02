import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Container from '../Container/Container';
import Row from '../Row/Row';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SentimentAnalysis from '../SentimentAnalysis/SentimentAnalysis';
import DateTime from './DateTime/DateTime';
import Search from '../shared/Search';

import { getGeoLocationCoordinatesFromApi } from '../utils/getGeoLocationCoordinatesFromApi';
import { fetchWeather } from "../utils/fetchWeather";
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
    getGeoLocationCoordinatesFromApi(event.target.value).then((response) => {
      setFormData({...formData, lat: response.lat, lon: response.lon});
    })
    
    fetchWeather(formData.lat, formData.lon).then((response) => {
      setFormData({...formData, todayTemp: Math.round(response.list[0].main.temp), list: response.list});
    })
    
    setLocation('');
  };

  useEffect(() => {
    
  }, [formData]);

  return (
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
              {formData.todayTemp && <SentimentAnalysis className="ml-2" />}
            </FlexBlock>
          </div>
          <div className="col-md-6">
            <DateTime />
          </div>
          </Row>
          <Row>
            <WeeklyWeather weatherData={formData.list}/>
        </Row>
      </Container>
  );
};

export default Weather;
