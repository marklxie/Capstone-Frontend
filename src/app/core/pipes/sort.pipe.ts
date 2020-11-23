import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: any[], sortCriteria: string = "", sortAsc: boolean = true): any[] {
    if(sortCriteria == ""){
      return list;
    }
    function test(a: any, b: any):number{
      let colA = a[sortCriteria];
      console.log(typeof colA);
      console.log(colA);
      let colB = b[sortCriteria];
      console.log(typeof colB)
      console.log(colB);
      return 0;
    }

    const sortftn = (a: any, b: any):number =>{
      let colA = a[sortCriteria];
      colA = ((typeof colA) == "number") ? colA : colA.toString().toLowerCase();
      let colB = b[sortCriteria];
      colB = ((typeof colB) == "number") ? colB : colB.toString().toLowerCase();
      if(colA == colB){
        return 0;
      }
      else if(colA > colB){
        return (sortAsc ? 1 : -1);
      }
      else{
        return (sortAsc ? -1 : 1);
      }
    }
    return list.sort(sortftn);    
  }

}
