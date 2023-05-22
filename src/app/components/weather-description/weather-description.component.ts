import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDescriptionComponent {
  @Input() public description: string | undefined;
  @Input() public highlightDescription: boolean = false;
}
