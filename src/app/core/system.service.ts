import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../User/user.class';


@Injectable({
  providedIn: 'root'
  
})
export class SystemService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  public hold: User;
  constructor() {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user'))); 
    this.user = this.userSubject as Observable<User>;
  }
  
  usercurrent():void{
        localStorage.setItem('user', JSON.stringify(this.hold));
        this.userSubject.next(this.hold);
  }
  logout():void{
    localStorage.clear();
    this.hold = null;
    this.userSubject.next(this.hold);
  }
}
