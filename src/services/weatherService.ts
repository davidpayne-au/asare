import { Coordinates, WeatherData } from '../types/weather';

// Use Open-Meteo Geocoding API to get coordinates from city name
export const getCoordinates = async (city: string): Promise<Coordinates | null> => {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch coordinates');
    }
    
    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      return null;
    }
    
    return {
      latitude: data.results[0].latitude,
      longitude: data.results[0].longitude,
    };
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
};

// Use Open-Meteo Weather API to get weather data
export const getWeather = async (
  latitude: number,
  longitude: number,
  city: string
): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    const data = await response.json();
    
    return {
      city,
      temperature: Math.round(data.current.temperature_2m),
      apparentTemperature: Math.round(data.current.apparent_temperature),
      humidity: data.current.relative_humidity_2m,
      windSpeed: Math.round(data.current.wind_speed_10m),
      weatherCode: data.current.weather_code,
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
