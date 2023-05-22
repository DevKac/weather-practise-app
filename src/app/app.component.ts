import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { City } from 'src/app/interfaces/city.interface';
import { Weather } from 'src/app/interfaces/weather.interface';
import { WeatherIcon } from 'src/app/enums/weather-icon.enum';
import { CityService } from 'src/app/services/city/city.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public cityList: City[] | undefined;
  public currentCity: City | undefined;
  public currentWeather: Weather | undefined;

  public readonly weatherIcon: typeof WeatherIcon = WeatherIcon;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private cityService: CityService,
    private weatherService: WeatherService
  ) {}

  public ngOnInit(): void {
    this.getCityList();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public citySelected(city: City | null): void {
    this.currentCity = city || undefined;
    if (city) {
      this.updateWeatherInfo();
    } else {
      this.clearWeatherInfo();
    }
  }

  private getCityList(): void {
    // TODO(anbelz): obsługa loader'ów, erorr handling
    this.cityService.fetchCities()
    .pipe(takeUntil(this.destroyed$))
    .subscribe((cityList: City[]) => {
      this.cityList = cityList;
      this.changeDetectorRef.detectChanges();
    });
  }
  
  private updateWeatherInfo(): void {
    if (!this.currentCity) {
      console.error('AppComponent: updateWeatherInfo: currentCity is null or undefined!');
      return;
    }

    this.clearWeatherInfo();
    // TODO(anbelz): obsługa loader'ów, erorr handling
    this.weatherService.fetchWeatherForCoordinates(this.currentCity.coord)
    .pipe(takeUntil(this.destroyed$))
    .subscribe((weather: Weather | null) => {
      this.currentWeather = weather || undefined;
      this.changeDetectorRef.detectChanges();
    });
  }

  private clearWeatherInfo(): void {
    this.currentWeather = undefined;
  }
}
