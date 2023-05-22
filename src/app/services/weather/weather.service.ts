import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Coordinates } from 'src/app/interfaces/coordinates.interface';
import { Weather } from 'src/app/interfaces/weather.interface';

@Injectable()
export class WeatherService {
  private readonly openWeatherMapEndpointUrl: string = 'https://api.openweathermap.org/data/2.5/weather'; // @TODO(anbelz): wynieść do jakiegoś pliku config lub env
  private readonly openWeatherMapApiKey: string = '{OpenWeatherMapApiKey}'; // @TODO(anbelz): {OpenWeatherMapApiKey} do wyniesienia do jakiegoś pliku config lub env
  private readonly openWeatherMapUnits: string = 'metric'; // @TODO(anbelz): wynieść do jakiegoś pliku config lub env

  constructor(private http: HttpClient) {}

  public fetchWeatherForCoordinates(coordinates: Coordinates): Observable<Weather | null> {
    if (!coordinates) {
      console.error('WeatherService: fetchWeatherForCoordinates: coordinates are null or undefined!');
      return of(null);
    }

    return this.http.get<Weather>(this.openWeatherMapEndpointUrl, {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lon,
        units: this.openWeatherMapUnits,
        appid: this.openWeatherMapApiKey
      }
    });
  }
}
