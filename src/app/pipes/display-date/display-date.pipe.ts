import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'displayDate'
})
export class DisplayDatePipe implements PipeTransform {
  private readonly dateFormat: string = 'mediumTime'; // @TODO(anbelz): wynieść do jakiegoś pliku config lub env

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) {}

  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }

    const date: Date = new Date(value*1000); // @INFO(anbelz): konwersja z unix timestamp
    return formatDate(date, this.dateFormat, this.locale);
  }

}
