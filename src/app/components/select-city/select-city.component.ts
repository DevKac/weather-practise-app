import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { City } from 'src/app/interfaces/city.interface';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCityComponent implements OnChanges {
  @Input() public cityList: City[] | undefined;
  @Output() public citySelected: EventEmitter<City | null> = new EventEmitter<City | null>();
  public selectedCity: City | null = null;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes?.cityList) {
      this.onSelectCity(this.cityList?.length ? this.cityList[0] : null);
    }
  }

  public onSelectCity(city: City | null): void {
    this.selectedCity = city;
    this.citySelected.emit(city);
  }
}
