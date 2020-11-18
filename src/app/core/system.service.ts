import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { User } from '../User/user.class';


@Injectable({
  providedIn: 'root'
  
})
export class SystemService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  public loggedInUser: User;

  constructor() {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user'))); 
    this.user = this.userSubject as Observable<User>;
    this.user.subscribe(
      res=>{
        this.loggedInUser = res;
      },
      err=>{
        console.error(err);
      }
    )
  }
  
  usercurrent():void{
        localStorage.setItem('user', JSON.stringify(this.loggedInUser));
        this.userSubject.next(this.loggedInUser);
  }
  logout():void{
    localStorage.clear();
    this.loggedInUser = null;
    this.userSubject.next(this.loggedInUser);
  }
}
