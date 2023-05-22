import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Coordinates } from 'src/app/interfaces/coordinates.interface';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherMapComponent implements OnChanges {
  @Input() public coordinates: Coordinates | undefined;
  public mapOptions: google.maps.MapOptions = {};
  public markerOptions: google.maps.MarkerOptions = {};
  private readonly mapZoom: number = 10; // @TODO(anbelz): wynieść do jakiegoś pliku config lub env

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes?.coordinates) {
      if (this.coordinates) {
        this.mapOptions = {
          center: {
            lat: this.coordinates.lat, lng: this.coordinates.lon
          },
          zoom: this.mapZoom
        }
      } else {
        this.mapOptions = {};
      }
    }
  }
}
