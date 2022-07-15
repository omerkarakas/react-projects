import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_WEATHER_QUERY } from '../graphql/Queries';

function Home() {
  const [city, setCity] = useState('');

  const queryWeather = (e) => {
    e.preventDefault();
    const cityName = document.getElementById('form').elements['input'].value;
    setCity(cityName);
    getWeather();
  };

  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: city },
  });
  if (error) return <h1>Error</h1>;
  //  if (loading) return <h1>Loading</h1>;
  console.log('data', data);
  return (
    <div className="home">
      <form id="form" onSubmit={(e) => queryWeather(e)}>
        <h1>Search For Weather</h1>
        <input
          name="input"
          type="text"
          placeholder="City name ..."
          // text={city}
          // onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {data && data.getCityByName && (
        <div className="weather">
          <hr />
          <h2>{`Weather report for ${data.getCityByName.name},${data.getCityByName.country}`}</h2>
          <h4>Summary: {data.getCityByName.weather.summary.description}</h4>
          <h4>Temp: {data.getCityByName.weather.temperature.actual} </h4>
          <h4>
            Wind:{' '}
            {`${data.getCityByName.weather.wind.deg} degree,  ${data.getCityByName.weather.wind.speed} speed`}
          </h4>
        </div>
      )}
    </div>
  );
}

export default Home;
