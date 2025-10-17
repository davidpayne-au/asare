import React from 'react';
import { WeatherData } from '../types/weather';
import './WeatherCard.css';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const getWeatherEmoji = (code: number) => {
    if (code === 0) return '☀️';
    if (code <= 3) return '🌤️';
    if (code <= 48) return '☁️';
    if (code <= 67) return '🌧️';
    if (code <= 77) return '🌨️';
    if (code <= 82) return '🌦️';
    return '⛈️';
  };

  const getWeatherDescription = (code: number) => {
    if (code === 0) return 'Clear sky';
    if (code <= 3) return 'Partly cloudy';
    if (code <= 48) return 'Cloudy';
    if (code <= 67) return 'Rainy';
    if (code <= 77) return 'Snowy';
    if (code <= 82) return 'Showers';
    return 'Thunderstorm';
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">{weather.city}</h2>
        <div className="weather-icon">
          {getWeatherEmoji(weather.weatherCode)}
        </div>
      </div>
      
      <div className="temperature">
        {weather.temperature}°C
      </div>
      
      <div className="weather-description">
        {getWeatherDescription(weather.weatherCode)}
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">💨 Wind Speed</span>
          <span className="detail-value">{weather.windSpeed} km/h</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">💧 Humidity</span>
          <span className="detail-value">{weather.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">🌡️ Feels Like</span>
          <span className="detail-value">{weather.apparentTemperature}°C</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
