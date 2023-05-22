import { Coordinates } from 'src/app/interfaces/coordinates.interface';

export interface Weather {
  coord: Coordinates;
  main: MainWeatherInfo;
  wind: WindWeatherInfo;
  clouds: CloudsWeatherInfo;
  weather: WeatherInfo[];
  sys: WeatherSysInfo;
}

export interface MainWeatherInfo {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

export interface WindWeatherInfo {
  speed: number;
  deg: number;
  gust: number;
}

export interface CloudsWeatherInfo {
  all: number;
}

export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherSysInfo {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number
}
