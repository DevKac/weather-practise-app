import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { WeatherIcon } from 'src/app/enums/weather-icon.enum';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherInfoComponent {
  @Input() public weatherIcon: WeatherIcon | undefined;
  @Input() public value: string | undefined;
}
