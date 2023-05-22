import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppComponent } from 'src/app/app.component';
import { CityHeaderComponent } from 'src/app/components/city-header/city-header.component';
import { SelectCityComponent } from 'src/app/components/select-city/select-city.component';
import { WeatherDescriptionComponent } from 'src/app/components/weather-description/weather-description.component';
import { WeatherInfoComponent } from 'src/app/components/weather-info/weather-info.component';
import { DisplayValuePipe } from 'src/app/pipes/display-value/display-value.pipe';
import { WeatherMapComponent } from 'src/app/components/weather-map/weather-map.component';
import { CityService } from 'src/app/services/city/city.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { DisplayDatePipe } from 'src/app/pipes/display-date/display-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityHeaderComponent,
    SelectCityComponent,
    WeatherDescriptionComponent,
    WeatherInfoComponent,
    DisplayValuePipe,
    WeatherMapComponent,
    DisplayDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [CityService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
