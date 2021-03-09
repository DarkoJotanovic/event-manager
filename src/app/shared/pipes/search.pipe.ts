import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], ...args: string[]): any[] {
    if (!items) {
      return items;
    }

    if (!args.length || !args[0]) {
      return items;
    }
    const filterText: string = args[0].toLowerCase();
    const name: string = args[1];
    const address: string = args[2];

    return items.filter(it => {
      return it[name].toLocaleLowerCase().concat(it[address].toLocaleLowerCase()).includes(filterText);
    });
  }
}
