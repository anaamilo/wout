import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, category: string): Array<string> {
      if (!items) return items
      return items.filter(item => item.muscleGroup === category);
    }
}
