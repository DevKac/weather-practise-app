import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-header',
  templateUrl: './city-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityHeaderComponent {
  @Input() public cityName: string | undefined = undefined;
}
