import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import styles from './Weather.module.css';

import Container from '../Container/Container';
import Row from '../Row/Row';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import SentimentAnalysis from '../SentimentAnalysis/SentimentAnalysis';
import DateTime from './DateTime/DateTime';
import Search from '../shared/Search';

import { getGeoLocationCoordinatesFromApi } from '../utils/getGeoLocationCoordinatesFromApi';
import { fetchWeather } from '../utils/fetchWeather';
import WeeklyWeather from './WeeklyWeather/WeeklyWeather';

const FlexBlock = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

const Weather = () => {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState({ lat: 0, lon: 0, list: [] });

  const handleChange = (event) => {
    /* get input value */
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    /* When the form is submitted a request to api is made and waits for resposne. */
    event.preventDefault();

    try {
      const response = await getGeoLocationCoordinatesFromApi(
        event.target.value
      );

      setFormData({ lat: response.lat, lon: response.lon });

      const weeklyWeatherResponse = await fetchWeather(
        formData.lat,
        formData.lon
      );

      setFormData({
        ...formData,
        todayTemp: Math.round(weeklyWeatherResponse.list[0].main.temp),
        list: weeklyWeatherResponse.list.slice(0, 6),
      });
    } catch (err) {
      console.log(err);
    }

    setLocation('');
  };

  useEffect(() => {}, [formData]);

  return (
    <Container
      classes={`mt-2 border rounded p-4 ${styles['shadows']} ${styles['center']}`}
    >
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
            <CurrentWeather todayTemp={formData.todayTemp} />
            {formData.todayTemp && <SentimentAnalysis className="ml-2" />}
          </FlexBlock>
        </div>
        <div className="col-md-6">
          <DateTime />
        </div>
      </Row>
      {formData.list && (
        <FlexBlock>
          <WeeklyWeather weatherData={formData.list} />
        </FlexBlock>
      )}
    </Container>
  );
};

export default Weather;
