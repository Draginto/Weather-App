import React from 'react';

import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: 600;
  font-size: 5rem;
`;

const CurrentWeather = (props) => {
  return (
    <>
      <Heading>{props.todayTemp ? props.todayTemp + '°' : ''}</Heading>
    </>
  );
};

export default CurrentWeather;
