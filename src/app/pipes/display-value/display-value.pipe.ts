import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayValue'
})
export class DisplayValuePipe implements PipeTransform {

  transform(value: string | number | boolean | null | undefined, suffix?: string): string {
    if (value === null || value === undefined) {
      return suffix || '';
    }

    return value.toString() + (suffix ? ' ' + suffix : '');
  }
}
