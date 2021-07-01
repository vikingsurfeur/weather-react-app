import React from 'react';
import styled from 'styled-components/macro'

const WeatherDaily = ({ datas }) => {
    return (
        <DailyCardWrapper>
            {datas.daily.map(data => (
                <DailyCardItem key={data.dt}>
                    <h4>{new Date(data.dt * 1000).toLocaleDateString('fr-FR')}</h4>
                    <img src={`${process.env.REACT_APP_ICON_URL}/${data.weather[0].icon}@2x.png`} alt="weather icon" />
                    <p>Température Maximale : {data.temp.max}</p>
                    <p>Température Minimale : {data.temp.min}</p>
                    <p>Levé de soleil : {new Date(data.sunrise * 1000).toLocaleTimeString('fr-FR')}</p>
                    <p>Couché de soleil : {new Date(data.sunset * 1000).toLocaleTimeString('fr-FR')}</p>
                    <p>Levé de lune : {new Date(data.moonrise * 1000).toLocaleTimeString('fr-FR')}</p>
                    <p>Couché de lune : {new Date(data.moonset * 1000).toLocaleTimeString('fr-FR')}</p>
                </DailyCardItem>
            ))}
        </DailyCardWrapper>
    )
}

const DailyCardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const DailyCardItem = styled.div`
    width: 20vw;
    padding: 1rem;
`;

export default WeatherDaily;