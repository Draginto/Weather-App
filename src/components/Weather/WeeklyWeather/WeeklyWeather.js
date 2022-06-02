import React from "react";

import styled from "styled-components";

const DayBlock = styled.div`
    border: 1px solid #121212;

`

const DayBlockHeader = styled.h1`
    border-bottom: 1px solid #121212;
    padding-bottom: 10px;
`

const DayBlockContent = styled.div`
    font-size: 2em;
`

const WeeklyWeather = (props) => {
    let count = 1;
    
    const loadDaysOfWeekWeather = props.weatherData.map((currentData) => (
                <DayBlock className="col-md-2" key={count++}>
                    <DayBlockHeader>{`Day ${count}`}</DayBlockHeader>
                    <DayBlockContent>{`${Math.round(currentData.main.temp)}°`}</DayBlockContent>
                </DayBlock>
        ));
    
    return <>{loadDaysOfWeekWeather}</>
}

export default WeeklyWeather;