# WeatherPractiseApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

# Task Description

1. Using the API available at https://openweathermap.org/current and city list (http://bulk.openweathermap.org/sample/) create an application capable of downloading current weather and presenting received data accordingly to the attached schema. The application should allow choosing another city by a select box in the upper right corner.

The application should be created using any JavaScript framework of your choice. Angular js preferred.

2. To show information, add icons related to the information presented (i.e. using http://fontawesome.io/ - http://fontawesome.io/icon/thermometer-empty/ to present temperature information)

3. Using any map providing service (i.e. https://developers.google.com/maps/documentation/javascript/adding-a-google-map), add a map to created application. Choosing a city should place a marker on the map, at appropriate place.

# Running Application

Before running following API Keys must be configured:
1. {GoogleMapsApiKey} in `src\index.html`
2. {OpenWeatherMapApiKey} in `src\app\services\weather\weather.service.ts`

With correct keys set run program using `npm run start`
