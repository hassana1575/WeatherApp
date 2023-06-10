import React, { useState, useEffect } from 'react';

const WeatherComponent = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'ea65ef56592022e4ebf13ff28212b287'; // Replace with your OpenWeather API key
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.log('Error:', response.status);
        }
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [country]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather Information</h2>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherComponent;
