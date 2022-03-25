import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string): any {
    if (!value) {
      return null;
    }
    if (!args) {
      return value;
    }
    args = args.toLocaleLowerCase()
    console.log(args);
    console.log(value);
    return value.filter((NoteList: any) => {
      return NoteList.title.toLocaleLowerCase().includes(args) || NoteList.body.toLocaleLowerCase().includes(args);
    })
  }
}
