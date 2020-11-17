import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../User/user.class';


@Injectable({
  providedIn: 'root'
  
})
export class SystemService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor() {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user'))); 
    this.user = this.userSubject as Observable<User>;
  }
  
  usercredentials(user:User){
  }
}
