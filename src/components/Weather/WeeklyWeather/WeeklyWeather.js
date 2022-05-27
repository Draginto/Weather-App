import React from "react";

import styled from "styled-components";

const DayBlockHeader = styled.h1`
    line-height: 1vw;
    height: 2vw;
    font-size: 2vw;
`

const DayBlockContent = styled.div`
`

const WeeklyWeather = (props) => {
    let count = 1;
    const loadDaysOfWeekWeather = props.weatherData.map((currentData) => (
                <div className="col" key={count++}>
                    <DayBlockHeader>{`Day ${count}`}</DayBlockHeader>
                    <DayBlockContent>{currentData.main.temp}</DayBlockContent>
                </div>
        ));
    
    return <>{loadDaysOfWeekWeather}</>
}

export default WeeklyWeather;