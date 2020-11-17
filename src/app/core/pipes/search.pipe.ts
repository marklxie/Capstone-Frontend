import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //This is a search function that should work for all as long as you have a list of properties.
  transform(everything: any[], keys: string[],searchcriteria: string = ""): any[] {
    if(searchcriteria == ""){
      return everything;
    }
    let hold: any[] = [];
    searchcriteria = searchcriteria.toLowerCase();
    for(let any of everything){
      for(let key of keys){
        if(any[key] != null && ((typeof any[key]) !== 'boolean' && any[key].toString().includes(searchcriteria))){
          hold.push(any);
          break;
        }
      }
    }
    return hold;
  }

}
