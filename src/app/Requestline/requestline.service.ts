import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

const baseurl: string = "http://localhost:61172/api/requestlines"
@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  constructor(
    private http:HttpClient
    ) { }
  
    list():Observable<Requestline[]>{
      return this.http.get(`${baseurl}`) as Observable<Requestline[]>;
    }

    getRequestline(num: number): Observable<Requestline>{
      return this.http.get(`${baseurl}/${num}`) as Observable<Requestline>;
    }

    listByRequest(requestId: number): Observable<Requestline[]>{
      return this.http.get(`${baseurl}/request/${requestId}`) as Observable<Requestline[]>
    }
  
    change(requestline: Requestline): Observable<any>{
      return this.http.put(`${baseurl}/${requestline.id}`, requestline) as Observable<Requestline>;
    }
  
    create(requestline:Requestline): Observable<any>{
      return this.http.post(`${baseurl}`, requestline) as Observable<any>;
    }
  
    delete(num: number): Observable<Requestline>{
      return this.http.delete(`${baseurl}/${num}`) as Observable<Requestline>;
    }
}
