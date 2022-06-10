import React from 'react';

import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0% {opacity: 0;}
  25% {opacity: 0.25;}
  50% {opacity: 0.5;}
  75% {opacity: 0.75;}
  100% {opacity: 1;}
`;

const DayBlock = styled.div`
  border: 1px solid #ff9636;
  border-radius: 1em;
  padding: 1em;
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
`;

const DayBlockHeader = styled.h1`
  border-bottom: 1px solid #ff9636;
  padding-bottom: 10px;
  letter-spacing: -0.05em;
`;

const DayBlockContent = styled.div`
  font-size: 3em;
  font-weight: 700;
  color: #ff9636;
`;

const getSeasonType = (temp) => {
  return temp > 50 ? 'summer' : 'winter';
};

const WeeklyWeather = (props) => {
  let count = 1;

  const loadDaysOfWeekWeather = props.weatherData.map((currentDay) => (
    <DayBlock
      className={`col-md-2 ${getSeasonType(currentDay.main.temp)}`}
      key={count++}
    >
      <DayBlockHeader>{`Day ${count}`}</DayBlockHeader>
      <DayBlockContent>{`${Math.round(
        currentDay.main.temp
      )}°`}</DayBlockContent>
    </DayBlock>
  ));

  return <>{loadDaysOfWeekWeather}</>;
};

export default WeeklyWeather;
