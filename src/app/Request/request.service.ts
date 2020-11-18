import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRequest } from './request.class';


const baseurl:string = "http://localhost:61172/api/requests";
@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(
    private http: HttpClient
  ) { }

  requests: PRequest[];
  
  list():Observable<PRequest[]>{
    return this.http.get(`${baseurl}`) as Observable<PRequest[]>;
  }
}
