import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import LoadingAnimation from './components/LoadingAnimation';
import { getCoordinates, getWeather } from './services/weatherService';
import { WeatherData } from './types/weather';
import './App.css';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      // Get coordinates for the city
      const coords = await getCoordinates(city);
      
      if (!coords) {
        setError('City not found. Please try another city.');
        setLoading(false);
        return;
      }

      // Get weather data
      const weatherData = await getWeather(coords.latitude, coords.longitude, city);
      setWeather(weatherData);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">☀️ Asare Weather App 🌤️</h1>
        <SearchBar onSearch={handleSearch} disabled={loading} />
        
        {loading && <LoadingAnimation />}
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {weather && !loading && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default App;
