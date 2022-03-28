import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(ListofNotes: any, args?: any): any {
    if(!args) {
      return ListofNotes;
    }
    console.log(args);
    console.log(ListofNotes);
    return ListofNotes.filter((obj:any) => {
      return obj.title.toLocaleLowerCase().includes(args) | obj.body.toLocaleLowerCase().includes(args);
    });
  }
}
