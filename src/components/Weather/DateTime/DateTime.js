import React from 'react';

import styled from 'styled-components';

const CurrentDate = styled.div`
  text-align: right;
  font-weight: 600;
  display: flex;
  align-content: center;
  line-height: 38px;
  justify-content: flex-end;
`;

const DateTime = () => {
  const currentDate = new Date().toLocaleString();

  return <CurrentDate>{currentDate}</CurrentDate>;
};

export default DateTime;
