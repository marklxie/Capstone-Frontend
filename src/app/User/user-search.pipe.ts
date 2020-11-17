import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users:User[], keys: string[], searchcriteria: string): User[] {
    if(searchcriteria == ""){
      return users;
    }
    let hold: any[] = [];
    searchcriteria = searchcriteria.toLowerCase();
    for(let user of users){
      for(let key of keys){
        if(user[key] != null && ((typeof user[key]) !== 'boolean') && user[key].toString().includes(searchcriteria)){
         hold.push(user);
         break;
        }
      }
    }
    return hold;
  }

}
