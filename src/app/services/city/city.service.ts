import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { City } from 'src/app/interfaces/city.interface';

@Injectable()
export class CityService {
  private readonly jsonURL: string = 'assets/json/city.list.json';  // @TODO(anbelz): wynieść do jakiegoś pliku config lub env
  private readonly startingCityIndex: number = 21500; // @TODO(anbelz): wynieść do jakiegoś pliku config lub env
  private readonly maxNumberOfCities: number = 100; // @TODO(anbelz): wynieść do jakiegoś pliku config lub env
  
  constructor(private http: HttpClient) {}

  public fetchCities(): Observable<City[]> {
    return this.http.get<City[]>(this.jsonURL).pipe(
      map((cities: City[]) => {
        // @TODO(anbelz): miast w podanym pliku JSON jest dużo za dużo by wyświetlić na raz. Do dodania paginacja na scroll'u select'a
        return cities?.slice(this.startingCityIndex, this.startingCityIndex + this.maxNumberOfCities) || [];
      }));
  }
}
