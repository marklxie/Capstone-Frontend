import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user.class';
import { Observable } from 'rxjs';

const baseurl: string = "http://localhost:61172/api/users";
@Injectable({
  providedIn: 'root'
})


export class UserService {
  users: User[];
  
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]>{
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }

  get(num: number): Observable<User>{
    return this.http.get(`${baseurl}/${num}`) as Observable<User>;
  }

  change(user: User): Observable<any>{
    return this.http.put(`${baseurl}/${user.id}`, user) as Observable<User>;
  }

  create(user:User): Observable<any>{
    return this.http.post(`${baseurl}`, user) as Observable<any>;
  }

  delete(num: number): Observable<User>{
    return this.http.delete(`${baseurl}/${num}`) as Observable<User>;
  }
  
}
