export interface WeatherData {
  city: string;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  weatherCode: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
